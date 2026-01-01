import { useState } from "react";
import { useGetRemoteJobsQuery } from "./features/jobs/jobsApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobsDetails from "./pages/JobsDetails";
import TrackerPage from "./pages/TrackerPage";

function App() {
  // const { data } = useGetRemoteJobsQuery();
  // console.log(data);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobsDetails />} />
          <Route path="/tracker" element={<TrackerPage />} />
        </Routes>
      </BrowserRouter>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
