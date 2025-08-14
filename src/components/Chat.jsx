import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createSocketConnection } from "../utils/socket";
import { Send, User, MessageCircle, Clock } from "lucide-react";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { addConnections } from "../utils/connectionSlice";

const DEFAULT_AVATAR = "https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png";

export default function Chat() {
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  
  const userId = user?._id;
  const firstName = user?.firstName;

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [targetUser, setTargetUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chatId, setChatId] = useState(null);
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);
  const roomIdRef = useRef(null);

  // Calculate room ID based on user IDs (same as server logic)
  useEffect(() => {
    if (userId && targetUserId) {
      roomIdRef.current = [userId, targetUserId].sort().join("_");
    }
  }, [userId, targetUserId]);

  // Fetch connections and find target user
  useEffect(() => {
    const fetchConnectionsAndFindUser = async () => {
      if (!targetUserId) return;
      
      try {
        setLoading(true);
        
        // If connections are not loaded, fetch them
        if (!connections) {
          const res = await axios.get(`${BASE_URL}/user/connections`, {
            withCredentials: true,
          });
          dispatch(addConnections(res.data.data));
        }
        
        // Find the target user in connections
        const foundUser = connections?.find(conn => conn._id === targetUserId);
        
        if (foundUser) {
          setTargetUser(foundUser);
        } else {
          // If not found in connections, create a fallback user object
          setTargetUser({
            _id: targetUserId,
            firstName: "User",
            lastName: "",
            photoUrl: null
          });
        }
      } catch (err) {
        console.error("Error fetching connections:", err);
        // Fallback: create a basic user object with the ID
        setTargetUser({
          _id: targetUserId,
          firstName: "User",
          lastName: "",
          photoUrl: null
        });
      } finally {
        setLoading(false);
      }
    };

    fetchConnectionsAndFindUser();
  }, [targetUserId, connections, dispatch]);

  // Fetch existing chat data from database
  useEffect(() => {
    const fetchChatData = async () => {
      if (!userId || !targetUserId) return;

      try {
        const res = await axios.get(`${BASE_URL}/chat/${targetUserId}`, {
          withCredentials: true,
        });
        
        if (res.data) {
          setChatId(res.data._id);
          
          // Convert database messages to frontend format with proper sender info
          const formattedMessages = res.data.messages
            .filter(msg => msg && msg.text && msg.senderId) // Filter out invalid messages
            .map((msg, index) => {
              const isCurrentUser = msg.senderId === userId;
              // Use createdAt if available, otherwise generate a fallback timestamp
              const messageTime = msg.createdAt ? new Date(msg.createdAt) : new Date(Date.now() - (res.data.messages.length - index) * 60000);
              
              // For current user, use user data from Redux store
              if (isCurrentUser) {
                return {
                  sender: "me",
                  text: msg.text,
                  timestamp: messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  senderId: msg.senderId,
                  senderPhoto: user?.photoUrl || null,
                  senderName: `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "You"
                };
              } else {
                // For other users, use targetUser data (which should be loaded from connections)
                return {
                  sender: "other",
                  text: msg.text,
                  timestamp: messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  senderId: msg.senderId,
                  senderPhoto: targetUser?.photoUrl || null,
                  senderName: targetUser ? `${targetUser.firstName || ""} ${targetUser.lastName || ""}`.trim() : "User"
                };
              }
            });
          
          setMessages(formattedMessages);
        }
      } catch (err) {
        console.error("Error fetching chat data:", err);
        // Continue with empty messages if fetch fails
      }
    };

    fetchChatData();
  }, [userId, targetUserId, user, targetUser]);

  // Refresh messages when targetUser changes (e.g., after connections are loaded)
  useEffect(() => {
    if (targetUser && messages.length > 0) {
      // Update messages with correct targetUser info
      const updatedMessages = messages.map(msg => {
        if (msg.sender === "other") {
          return {
            ...msg,
            senderPhoto: targetUser?.photoUrl || null,
            senderName: targetUser ? `${targetUser.firstName || ""} ${targetUser.lastName || ""}`.trim() : "User"
          };
        }
        return msg;
      });
      setMessages(updatedMessages);
    }
  }, [targetUser, messages.length]);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Connect socket and join chat room
  useEffect(() => {
    if (!userId || !targetUserId || !firstName || !roomIdRef.current) return;

    // Create socket connection
    socketRef.current = createSocketConnection();

    // Join chat room
    socketRef.current.emit("joinChat", { firstName, userId, targetUserId });

    // Listen for incoming messages
    socketRef.current.on("messageReceived", (messageData) => {
      // Handle both old format (just text) and new format (object with text and senderId)
      const messageText = typeof messageData === 'string' ? messageData : messageData.text;
      const messageSenderId = typeof messageData === 'string' ? targetUserId : messageData.senderId;
      
      setMessages((prev) => [...prev, { 
        sender: "other", 
        text: messageText, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        senderId: messageSenderId,
        senderPhoto: targetUser?.photoUrl || null,
        senderName: targetUser ? `${targetUser.firstName || ""} ${targetUser.lastName || ""}`.trim() : "User"
      }]);
    });

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [userId, targetUserId, firstName, targetUser]);
// In your frontend Chat.jsx, modify the sendMessage function:
const sendMessage = async () => {
  if (!newMessage.trim() || !socketRef.current) return;

  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Add message to local state immediately with sender info
  const newMessageObj = { 
    sender: "me", 
    text: newMessage, 
    timestamp,
    senderId: userId,
    senderPhoto: user?.photoUrl || null,
    senderName: user ? `${user.firstName || ""} ${user?.lastName || ""}`.trim() : "You"
  };

  setMessages((prev) => [...prev, newMessageObj]);

  // Send message to server via socket with both text and senderId
  socketRef.current.emit("sendMessage", {
    text: newMessage,
    senderId: userId
  });

  // Clear input
  setNewMessage("");
};

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Get target user's full name and avatar
  const getTargetUserInfo = () => {
    if (!targetUser) return { name: "Loading...", avatar: DEFAULT_AVATAR };
    
    const fullName = `${targetUser.firstName || ""} ${targetUser.lastName || ""}`.trim() || "User";
    const avatar = targetUser.photoUrl || DEFAULT_AVATAR;
    
    return { name: fullName, avatar };
  };

  const { name, avatar } = getTargetUserInfo();

  // Get sender info for a message
  const getSenderInfo = (message) => {
    // Use the sender info that was stored when the message was created/fetched
    return {
      photo: message.senderPhoto || DEFAULT_AVATAR,
      name: message.senderName || "User"
    };
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-br from-gray-950 via-purple-950/80 to-[#120922]">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 backdrop-blur-xl border-b border-gray-600/40 shadow-xl shadow-gray-900/20 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg ring-2 ring-purple-400/40">
            {loading ? (
              <div className="w-full h-full bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-400 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = DEFAULT_AVATAR;
                }}
              />
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-white">
              {name}
            </h1>
            <p className="text-sm text-gray-300">
              {loading ? "Loading..." : "Real-time messaging"}
            </p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
            <MessageCircle className="w-5 h-5 text-gray-900" />
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-4 shadow-lg">
              <MessageCircle className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="text-lg font-medium text-gray-200 mb-2">No messages yet</h3>
            <p className="text-purple-200 max-w-sm">
              Start the conversation by sending your first message!
            </p>
          </div>
        )}
        
        {messages.map((m, i) => {
          const senderInfo = getSenderInfo(m);
          return (
            <div
              key={`${m.senderId}-${i}-${m.timestamp}`}
              className={`flex ${m.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[75%] ${m.sender === "me" ? "order-2" : "order-1"}`}>
                <div className={`flex items-end space-x-2 ${m.sender === "me" ? "flex-row-reverse space-x-reverse" : ""}`}>
                  {m.sender === "other" && (
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 shadow-lg ring-1 ring-purple-400/40">
                      <img
                        src={senderInfo.photo}
                        alt={senderInfo.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = DEFAULT_AVATAR;
                        }}
                      />
                    </div>
                  )}
                  <div className={`px-4 py-3 rounded-2xl shadow-lg ${
                    m.sender === "me" 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-md" 
                      : "bg-white/10 backdrop-blur-md text-gray-200 rounded-bl-md border border-purple-400/20"
                  }`}>
                    <p className="text-sm leading-relaxed">{m.text}</p>
                    <div className={`flex items-center mt-1 space-x-1 ${
                      m.sender === "me" ? "justify-end" : "justify-start"
                    }`}>
                      <Clock className={`w-3 h-3 ${m.sender === "me" ? "text-purple-100" : "text-purple-300"}`} />
                      <span className={`text-xs ${m.sender === "me" ? "text-purple-100" : "text-purple-300"}`}>
                        {m.timestamp}
                      </span>
                    </div>
                  </div>
                  {m.sender === "me" && (
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 shadow-lg ring-1 ring-purple-400/40">
                      <img
                        src={senderInfo.photo}
                        alt={senderInfo.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = DEFAULT_AVATAR;
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[75%]">
              <div className="flex items-end space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden shadow-lg ring-1 ring-purple-400/40">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = DEFAULT_AVATAR;
                    }}
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl rounded-bl-md border border-purple-400/40">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 backdrop-blur-xl border-t border-gray-600/40 p-4 shadow-xl shadow-gray-900/20">
        <div className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              placeholder="Type your message..."
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-purple-400/20 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-200 placeholder-purple-300"
              rows="1"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{ minHeight: '44px', maxHeight: '120px' }}
            />
          </div>
          <button 
            onClick={sendMessage}
            disabled={!newMessage.trim()}
            className={`p-3 rounded-full transition-all duration-200 shadow-lg ${
              newMessage.trim() 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white hover:scale-105 hover:shadow-xl' 
                : 'bg-white/10 backdrop-blur-md text-purple-300 cursor-not-allowed border border-purple-400/20'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Press Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  );
}
