import React, { useEffect, useState } from 'react';
import BASE_URL from '../utils/constants';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard'; // Ensure this is the right path
import { removeUserFromFeed } from '../utils/feedSlice';
import {useSelector} from "react-redux";

const Feed = () => {

  const dispatch = useDispatch();
 const users = useSelector((state) => state.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      //console.log("Feed Response:", res.data);
      dispatch(addFeed(res.data));
      // Save users to state for rendering
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className="flex justify-center my-10">
      {users.length > 0 ? (
        <UserCard user={users[0]} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Feed;
