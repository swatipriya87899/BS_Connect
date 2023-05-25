import { createSlice } from '@reduxjs/toolkit';

const friend = createSlice({
  name: 'friends',
  initialState: {
    allFriends: []
  },
  reducers: {
    allNearbyFriends: (state, action) => {
      state.allFriends = action.payload;
    },
    removeNearbyFriends: (state, action) => {
      state.allFriends = state.allFriends.filter((item) => item.id !== action.payload);
    }
  }
});

export const { allNearbyFriends, removeNearbyFriends } = friend.actions;
export default friend.reducer;
