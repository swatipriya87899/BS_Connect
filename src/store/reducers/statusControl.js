import { createSlice } from '@reduxjs/toolkit';

const statusControlSlice = createSlice({
  name: 'statusControl',
  initialState: {leftbarStatus:false},
  reducers: {
    showLeftbarStatus: (state) => state=true,
    showHidebarStatus: (state) => state=false,
  },
});

export const { showLeftbarStatus, showHidebarStatus } = statusControlSlice.actions;
export default statusControlSlice.reducer;
