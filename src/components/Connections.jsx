
import React, { useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error('Error fetching connections:', err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Your Connections</h1>
      <div className="flex flex-col gap-4">
        {connections && connections.map((conn) => (
          <div
            key={conn._id}
            className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-200 w-full"
          >
            <div className="card-body flex flex-row items-center gap-6 w-full">
              <img
                className="w-16 h-16 rounded-full object-cover border border-gray-300"
                src={conn.photoUrl || 'https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png'}
                alt="profile"
              />
              <div className="flex-1">
                <h2 className="card-title text-lg font-semibold">{conn.firstName} {conn.lastName}</h2>
                <p className="text-sm text-gray-100 font-semibold">{conn.age }</p>
                <p className="text-sm text-gray-100 font-semibold">{conn.gender }</p>
                <p className="text-sm text-gray-100 font-semibold">{conn.about || 'No bio available'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;
