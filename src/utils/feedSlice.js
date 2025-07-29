 import { createSlice } from '@reduxjs/toolkit';

  const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        addFeed: (state, action) => {
            return action.payload; // Set the feed data to the payload
        },
        removeFeed: (state,action) => {
            return null; // Clear the feed data
        }
    }});

    export const {addFeed, removeFeed} = feedSlice.actions;
    export default feedSlice.reducer;