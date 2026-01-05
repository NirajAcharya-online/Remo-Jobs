import React, { useState } from "react";
import { useSelector } from "react-redux";
import JobsCard from "../components/JobsCard";

function TrackerPage() {
  const jobs = useSelector((state) => state.tracker.savedJobs || []);
  return (
    <div className="h-full w-full overflow-scroll overflow-x-hidden ">
      {jobs.length > 0 && (
        <h2 className="text-center p-6 m-6 text-2xl font-bold text-red-700">
          Saved Jobs
        </h2>
      )}
      <div className="m-5 flex flex-col justify-center gap-4">
        {jobs.length === 0 && (
          <h2 className="text-center p-6 m-6 text-2xl font-bold text-red-700">
            No Jobs Saved
          </h2>
        )}
        {jobs?.map((job) => (
          <JobsCard key={job.title} job={job} />
        ))}
      </div>
    </div>
  );
}

export default TrackerPage;
