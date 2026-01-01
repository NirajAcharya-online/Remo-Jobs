import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "../features/tracker/trackerSlice";
import { jobsApi } from "../features/jobs/jobsApi";

export const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    tracker: trackerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});
