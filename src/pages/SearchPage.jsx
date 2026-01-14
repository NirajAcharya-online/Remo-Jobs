import React, { useState } from "react";
import { FourSquare } from "react-loading-indicators";
import Error from "../components/Error";
import Input from "../components/Input";
import NoJobsFoundState from "../components/NoJobsFound";
import JobsCard from "../components/JobsCard";
import useDebounce from "../components/Hooks/Debounce";
import { useSearchJobsQuery } from "../features/jobs/jobsApi";
import SearchForJob from "../components/SearchForJob";
function SearchPage() {
  const [value, setValue] = useState("");
  const debouncedSearch = useDebounce(value.trim(), 200);

  const { data, isLoading, error, isFetching, refetch } = useSearchJobsQuery(
    debouncedSearch,
    { skip: debouncedSearch.length < 3 }
  );

  const jobs = data?.jobs || [];
  const isIdle = debouncedSearch.length < 4;
  const hasJobs = jobs.length > 0;
  const isEmpty = !isLoading && !isFetching && !hasJobs && !isIdle;

  const FullCenter = ({ children }) => (
    <div className="h-[70vh] w-full flex justify-center items-center">
      {children}
    </div>
  );

  if (isLoading || isFetching) {
    return (
      <FullCenter>
        <FourSquare
          color="#78896b"
          size="large"
          text="Getting Jobs"
          textColor="#4dc418"
        />
      </FullCenter>
    );
  }

  if (error) {
    return (
      <FullCenter>
        <Error onRetry={refetch} />
      </FullCenter>
    );
  }

  return (
    <div className="w-full h-[85vh] flex flex-col items-center pt-6 overflow-hidden">
      <div className="w-full max-w-3xl flex justify-center  mb-6 px-4">
        <Input
          placeholder="Search for job..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-gray-500 text-center  sm:w-[500px]"
        />
      </div>

      <div
        className="w-full max-w-3xl flex-grow overflow-y-auto px-4 pb-10
                   scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {isIdle && !hasJobs && <SearchForJob />}

        {isEmpty ? (
          <div className="w-full flex justify-center mt-10">
            <NoJobsFoundState />
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="w-full flex justify-center">
                <JobsCard job={job} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
