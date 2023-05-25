import {createSlice} from '@reduxjs/toolkit';

const statusControlSlice = createSlice({
  name: 'statusControl',
  initialState: {
    leftbarStatus: false,
    nearbyFriends: true,
    connectRequest: false,
  },
  reducers: {
    showLeftbarStatus: state => (state = true),
    showHidebarStatus: state => (state = false),
    nearbyFriends: state => (state.nearbyFriends = true),
    connectRequest: state => (state.nearbyFriends=false),
  },
});

export const {showLeftbarStatus, showHidebarStatus, nearbyFriends, connectRequest} =
  statusControlSlice.actions;
export default statusControlSlice.reducer;
