import React from "react";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import JobsCard from "../components/JobsCard";
import JobFilters from "../components/JobFilters";
import Error from "../components/Error.jsx";
import JobCardSkeleton from "../components/Skeleton/JobCardSkeleton";
import FilterSkeleton from "../components/Skeleton/FilterSkeleton";
import { useSearchParams } from "react-router-dom";
import NoJobsFoundState from "../components/NoJobsFound";

function Jobs() {
  const [searchParms, setSearchParams] = useSearchParams();
  const category = searchParms.get("category") || "alL";
  const { data, isLoading, error, isFetching, refetch } =
    useGetRemoteJobsQuery(category);
  const jobs = data?.jobs ?? [];

  const uiState = isLoading
    ? "loading"
    : error && !jobs.length === 0
    ? "error"
    : isFetching
    ? "fetching"
    : !isLoading && jobs.length === 0
    ? "empty"
    : "success";
  if (uiState === "loading") {
    return (
      <div className="w-11/12 h-11/12 overflow-hidden pl-20  gap-2 pt-35 flex flex-col items-center ">
        <FilterSkeleton />
        {Array.from({ length: 3 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (uiState === "error") {
    return <Error onRetry={refetch} />;
  }
  if (uiState === "fetching") {
    return (
      <div className="w-11/12 h-11/12 gap-2 pl-20 pt-35 overflow-hidden flex flex-col items-center ">
        <FilterSkeleton />
        {jobs?.map((job) => (
          <JobsCard key={`remote-${job.id}`} job={job} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-11/12 m-auto  h-[90%] pt-30 pb-20 overflow-scroll overflow-x-hidden  scroll-smooth  ">
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
              <div className="h-fit w-fit m-auto">
                <NoJobsFoundState from={true} />
              </div>
            )}
            {!isLoading && (
              <div className="flex flex-col justify-center w-full gap-4  ">
                {jobs?.map((job) => (
                  <JobsCard key={`remote-${job.id}`} job={job} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
