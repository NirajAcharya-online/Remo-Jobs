import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedJobs: [],
};
const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    updateJobs: (state, action) => {

      state.savedJobs.push(action.payload);
    },
    deleteJobs: (state, action) => {
      state.savedJobs = state.savedJobs.filter(
        (jobs) => jobs.id !== action.payload
      );
    },
  },
});
export default trackerSlice.reducer;
export const { updateJobs, deleteJobs } = trackerSlice.actions;
