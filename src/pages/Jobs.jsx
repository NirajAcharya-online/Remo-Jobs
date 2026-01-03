import React from "react";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import Container from "../components/Container/Container";
import JobsCard from "../components/JobsCard";
import Loading from "../components/Loading";

function Jobs() {
  const { data, isLoading, isError } = useGetRemoteJobsQuery();
  const jobs = data?.jobs ?? [];
  return (
    <div className="w-screen m-auto h-[90%] pt-20 pb-20 overflow-scroll overflow-x-hidden">
      {isLoading && (
        <Loading
        color={"pink"}
        secColor={"blue"}
        />
      )}
      {!isLoading && (
        <div className="flex flex-wrap gap-3.5">
          {jobs?.map((job) => (
            <JobsCard key={`remote-${job.id}`} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Jobs;
