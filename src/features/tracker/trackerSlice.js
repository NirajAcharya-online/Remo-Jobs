import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedJobs: JSON.parse(localStorage.getItem("jobs")) || [],
};
const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    updateJobs: (state, action) => {
      state.savedJobs.push(action.payload);
      localStorage.setItem("jobs", JSON.stringify(state.savedJobs));
    },
    deleteJobs: (state, action) => {
      state.savedJobs = state.savedJobs.filter(
        (jobs) => jobs.id !== action.payload
      );
      localStorage.setItem("jobs", JSON.stringify(state.savedJobs));
    },
  },
});
export default trackerSlice.reducer;
export const { updateJobs, deleteJobs } = trackerSlice.actions;
