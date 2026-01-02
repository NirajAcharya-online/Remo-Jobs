import React from "react";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import Container from "../components/Container/Container";
import JobsCard from "../components/JobsCard";

function Jobs() {
  const { data, isLoading, isError } = useGetRemoteJobsQuery();
  const jobs = data?.jobs ?? [];
  return (
    <div className="w-screen m-auto h-[90%] pt-20 pb-20 overflow-scroll overflow-x-hidden">
      {isLoading && (
        <div className="flex justify-center items-center w-full h-full">
          <h1 className="font-extrabold font-serif"> Loading..... </h1>
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-wrap gap-3.5">
          {jobs.map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Jobs;
