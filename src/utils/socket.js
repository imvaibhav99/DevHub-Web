import { io } from "socket.io-client";
import BASE_URL from "./constants";

export const createSocketConnection=()=>{
    if(location.hostname === "localhost"){      
        return io(BASE_URL);      //connecting to the server
    }
    else{
        return io("/",{ path: "/api/socket.io" });     //connecting to the server in production environment with the path /api/socket.io
    }
} 