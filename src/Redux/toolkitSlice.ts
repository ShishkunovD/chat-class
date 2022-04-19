import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: {
    username: ''
  },
  reducers: {
    getUserName(state, action) {
      state.username = action.payload;
    }
  }
});

export default toolkitSlice.reducer;
export const { getUserName } = toolkitSlice.actions;