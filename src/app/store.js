import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "../features/tracker/trackerSlice";
import { jobsApi } from "../features/jobs/jobsApi";
import userReducer from "../features/Authentication/userSlice";
export const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    tracker: trackerReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});
