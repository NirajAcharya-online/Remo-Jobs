import React, { useState } from "react";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import JobsCard from "../components/JobsCard";
import Loading from "../components/Loading";
import JobFilters from "../components/JobFilters";
import Error from "../components/Error";

function Jobs() {
  const [category, setCategory] = useState("all");
  const { data, isLoading, error } = useGetRemoteJobsQuery(category, {
    skip: !category,
  });
  const jobs = data?.jobs ?? [];
  const loading = isLoading && jobs.length <= 0;
  const isError = error && jobs.length <= 0;
  const noJobs = !isLoading && jobs.length <= 0;
  const navigate = {
    message: "Refresh Page",
    link: "/jobs",
  };
  if (loading) {
    return <Loading color={"pink"} secColor={"blue"} />;
  }
  if (isError) {
    return <Error message={"Failed to Get Jobs"} navigateto={navigate} />;
  }

  return (
    <div className="w-screen m-auto h-[90%] pt-20 pb-20 overflow-scroll overflow-x-hidden">
      {!isLoading && (
        <div className="flex flex-col">
          <JobFilters activeCategory={category} onChange={setCategory} />

          <div className="flex flex-wrap justify-start gap-3.5">
            {noJobs && (
              <h2 className="text-center w-full font-bold p-4 text-3xl text-red-500 font-serif">
                NO JOBS FOUND
              </h2>
            )}
            {!isLoading &&
              jobs?.map((job) => (
                <JobsCard key={`remote-${job.id}`} job={job} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
