 import { createSlice } from '@reduxjs/toolkit';

  const feedSlice = createSlice({
    name: 'feed',
    initialState: [],
    reducers: {
        addFeed: (state, action) => {
            return action.payload; // Set the feed data to the payload
        },
        removeUserFromFeed: (state,action) => {
           const newFeed= state.filter(user=>user._id !== action.payload)
           return newFeed;
        }
    }});

    export const {addFeed, removeUserFromFeed} = feedSlice.actions;
    export default feedSlice.reducer;