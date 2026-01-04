import React, { useState } from "react";
import { useSelector } from "react-redux";
import JobsCard from "../components/JobsCard";

function TrackerPage() {
  const jobs = useSelector((state) => state.tracker.savedJobs || []);
  return (
    <div className="h-full w-full overflow-scroll overflow-x-hidden ">
      {jobs.length === 0 && <h2 className="text-center">NO Jobs Saved</h2>}

      <div className="m-5 flex flex-col gap-4">
        {jobs?.map((job) => (
          <JobsCard job={job} />
        ))}
      </div>
    </div>
  );
}

export default TrackerPage;
