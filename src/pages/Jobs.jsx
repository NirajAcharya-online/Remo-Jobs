import React, { useState } from "react";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import JobsCard from "../components/JobsCard";
import JobFilters from "../components/JobFilters";
import Error from "../components/Error";
import JobCardSkeleton from "../components/Skeleton/JobCardSkeleton";
import FilterSkeleton from "../components/Skeleton/FilterSkeleton";
import { useSearchParams } from "react-router-dom";

function Jobs() {
  const [searchParms, setSearchParams] = useSearchParams();
  const category = searchParms.get("category") || "alL";
  const { data, isLoading, error, isFetching } =
    useGetRemoteJobsQuery(category);
  const jobs = data?.jobs ?? [];

  const uiState =
    isLoading && !jobs.length === 0
      ? "loading"
      : error && !jobs.length === 0
      ? "error"
      : isFetching
      ? "fetching"
      : !isLoading && jobs.length === 0
      ? "empty"
      : "success";

  const navigate = {
    message: "Refresh Page",
    link: "/jobs",
  };
  if (uiState === "loading") {
    return (
      <div className="w-11/12 h-11/12 overflow-hidden  gap-0 pt-30 flex flex-col items-center ">
        <FilterSkeleton />
        {Array.from({ length: 3 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (uiState === "error") {
    return <Error message={"Failed to Get Jobs"} navigateto={navigate} />;
  }
  if (uiState === "fetching") {
    return (
      <div className="w-11/12 h-11/12 gap-2 pt-30 overflow-hidden flex flex-col items-center ">
        <JobFilters
          activeCategory={category}
          onChange={(newCategory) => setSearchParams({ category: newCategory })}
        />
        {Array.from({ length: 3 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-11/12 m-auto  h-[90%] pt-30 pb-20 overflow-scroll overflow-x-hidden">
      {!isLoading && (
        <div className="flex flex-col">
          <JobFilters
            activeCategory={category}
            onChange={(newCategory) =>
              setSearchParams({ category: newCategory })
            }
          />
          <div className="flex flex-wrap justify-start gap-3.5">
            {uiState === "empty" && (
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
