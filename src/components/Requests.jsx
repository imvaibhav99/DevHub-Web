
import React, { useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../utils/requestSlice';

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/received`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error('Error fetching requests:', err);
    }
  };

  const handleReview = async (requestId, status) => {
    try {
      await axios.post(
        `${BASE_URL}/request/review/${status}/${requestId}`,
        {},
        { withCredentials: true }
      );
      fetchRequests(); // refresh the list after action
    } catch (error) {
      console.error(`Failed to ${status} request:`, error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="p-4 w-full">
  {requests === null ? (
    <div className="flex justify-center mt-20">
      <div className="bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-100 p-6 rounded-2xl shadow-lg text-xl font-semibold">
        Loading...
      </div>
    </div>
  ) : requests.length === 0 ? (
    <div className="flex justify-center mt-20">
      <div className="bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-100 p-6 rounded-2xl shadow-lg text-xl font-semibold text-center">
         No New Requests!
      </div>
    </div>
  ) : (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Connection Requests</h1>
      <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
        {requests.map((req) => {
          const user = req.fromUserId;
          return (
            <div
              key={req._id}
              className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-200 w-full"
            >
              <div className="card-body flex flex-row items-center justify-between gap-6 w-full">
                <div className="flex items-center gap-6">
                  <img
                    className="w-16 h-16 rounded-full object-cover border border-gray-300"
                    src={
                      user.photoUrl ||
                      'https://raw.githubusercontent.com/vaibhavkachare/dark-avatar/main/dark-profile.png'
                    }
                    alt="profile"
                  />
                  <div>
                    <h2 className="card-title text-lg font-semibold">
                      {user.firstName} {user.lastName}
                    </h2>
                    <p className="text-sm text-gray-100 font-semibold">{user.age}</p>
                    <p className="text-sm text-gray-100 font-semibold">{user.gender}</p>
                    <p className="text-sm text-gray-100 font-semibold">
                      {user.about || 'No bio available'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleReview(req._id, 'accepted')}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => handleReview(req._id, 'rejected')}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )}
</div>



  );
};

export default Requests;
