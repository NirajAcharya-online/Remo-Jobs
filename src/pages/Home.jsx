import React, { useState } from "react";
import Input from "../components/Input";
import { useSearchJobsQuery } from "../features/jobs/jobsApi";
import JobsCard from "../components/JobsCard";
import Error from "../components/Error.jsx";
import useDebounce from "../components/Hooks/Debounce";
import JobCardSkeleton from "../components/Skeleton/JobCardSkeleton";
import SearchForJob from "../components/SearchForJob";
import NoJobsFoundState from "../components/NoJobsFound";

function Home() {
  const [value, setValue] = useState("");
  const debouncedSearch = useDebounce(value.trim(), 200);
  const { data, isLoading, error, isFetching, refetch } = useSearchJobsQuery(
    debouncedSearch,
    {
      skip: debouncedSearch.length < 3,
    }
  );
  const jobs = data?.jobs || [];
  const isIdle = debouncedSearch.length < 4;
  const hasJobs = jobs.length > 0;
  const isEmpty = !isLoading && !isFetching && !hasJobs && !isIdle;

  if (isLoading && !hasJobs) {
    return (
      <div className="h-11/12 w-11/12 flex-col flex gap-4 pl-20 pt-30 justify-center items-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (error) {
    return (
      <div className="h-11/12 w-11/12 flex justify-center items-center">
        <Error onRetry={refetch} />;
      </div>
    );
  }
  if (isFetching) {
    return (
      <div className="h-11/12 w-11/12 flex flex-col gap-4 justify-center items-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className="h-10/12 w-screen  from-emerald-500 to-teal-400 ">
      <div className="h-30 pt-6 w-full  ">
        <div className="flex flex-col justify-center m-auto items-center gap-2 rounded-2xl ">
          <div className="flex gap-3 ">
            <Input
              placeholder="Search for job..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      {isIdle && !hasJobs && <SearchForJob />}
      {jobs && (
        <div className=" h-11/12 overflow-x-hidden flex flex-col gap-2 overflow-y-scroll">
          {jobs?.map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
          {isEmpty && <NoJobsFoundState />}
        </div>
      )}
    </div>
  );
}

export default Home;
