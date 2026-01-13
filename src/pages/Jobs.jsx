import React from "react";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import JobsCard from "../components/JobsCard";
import JobFilters from "../components/JobFilters";
import Error from "../components/Error.jsx";
import JobCardSkeleton from "../components/Skeleton/JobCardSkeleton";
import FilterSkeleton from "../components/Skeleton/FilterSkeleton";
import { useSearchParams } from "react-router-dom";
import NoJobsFoundState from "../components/NoJobsFound";
import { FourSquare } from "react-loading-indicators";

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
      <div className="min-w-1/2 h-11/12 overflow-hidden pl-15 m-auto  gap-2 pt-35 flex flex-col items-center ">
        <FourSquare
          color="#78896b"
          size="large"
          text="Getting Jobs"
          textColor="#4dc418"
        />
      </div>
    );
  }
  if (uiState === "error") {
    return <Error onRetry={refetch} />;
  }
  if (uiState === "fetching") {
    return (
      <div className="md:w-full lg-w-  h-11/12 m-auto gap-2 pl-15 pt-35 overflow-hidden flex justify-center items-center ">
        <FourSquare
          color="#78896b"
          size="large"
          text="Getting Jobs"
          textColor="#4dc418"
        />
      </div>
    );
  }

  return (
    <div className="md:w-full sm:w-full m-auto lg:w-1/2 h-[90%] pt-30 pb-20 overflow-scroll overflow-x-hidden  scroll-smooth  ">
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
              <div className="flex flex-col justify-center w-full m-3 gap-4  ">
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
