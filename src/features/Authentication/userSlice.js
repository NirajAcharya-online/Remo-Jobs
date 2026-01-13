import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userDetails: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userDetails = action.payload;
    },
    clearUser: (state, action) => {
      state.userDetails = null;
    },
  },
});
export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
