import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedJobs: [],
};
const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    helloword: (state, action) => {
      console.log(state);
    },
  },
});
export default trackerSlice.reducer;
export const { helloword } = trackerSlice.actions;
