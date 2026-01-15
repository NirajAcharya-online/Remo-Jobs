import React from "react";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import JobsCard from "../components/JobsCard";
import JobFilters from "../components/JobFilters";
import Error from "../components/Error.jsx";

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

  if (uiState === "error") {
    return <Error onRetry={refetch} />;
  }

  return (
    <div className="w-full max-w-6xl h-full mx-auto flex flex-col pt-6  pb-12 px-4 overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden">
      <JobFilters
        activeCategory={category}
        onChange={(newCategory) => setSearchParams({ category: newCategory })}
      />
      {uiState === "empty" && (
        <div className="w-full flex justify-center mt-10">
          <NoJobsFoundState from={true} />
        </div>
      )}
      {jobs?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center mt-3">
          {jobs.map((job) => (
            <JobsCard key={`remote-${job.id}`} job={job} />
          ))}
        </div>
      )}
      {(uiState === "loading" || uiState === "fetching") && (
        <div className="w-full h-full flex justify-center items-center mt-10">
          <FourSquare
            color="#78896b"
            size="large"
            text="Getting Jobs"
            textColor="#4dc418"
          />
        </div>
      )}
    </div>
  );
}

export default Jobs;
