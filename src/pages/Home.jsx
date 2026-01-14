import React, { useState } from "react";
import Input from "../components/Input";
import { useSearchJobsQuery } from "../features/jobs/jobsApi";
import JobsCard from "../components/JobsCard";
import Error from "../components/Error.jsx";
import useDebounce from "../components/Hooks/Debounce";
import SearchForJob from "../components/SearchForJob";
import NoJobsFoundState from "../components/NoJobsFound";
import { FourSquare } from "react-loading-indicators";

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
      <div className=" max-h-11/12 min-h-fit w-11/12 overflow-hidden flex-col flex gap-4 pl-20 pt-30 justify-center items-center">
        <FourSquare
          color="#78896b"
          size="large"
          text="Getting Jobs"
          textColor="#4dc418"
        />
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
      <div className="max-h-11/12 min-h-fit w-11/12 overflow-hidden flex-col flex gap-4 pl-20 pt-30 justify-center items-center">
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
    <div className="w-full h-11/12 flex flex-col items-center pt-6 pb-12">
      <div className="w-full max-w-3xl flex justify-center mb-6">
        <Input
          placeholder="Search for job..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full text-center sm:w-[500px] lg:w-[600px]"
        />
      </div>
      {isIdle && !hasJobs && <SearchForJob />}
      {jobs && jobs.length > 0 && (
        <div
          className="w-full max-w-3xl flex flex-col gap-6 px-4 overflow-y-auto 
                      [&::-webkit-scrollbar]:hidden -ms-overflow-style-none scrollbar-width-none"
        >
          {isEmpty ? (
            <div className="w-full flex justify-center mt-10">
              <NoJobsFoundState />
            </div>
          ) : (
            jobs.map((job) => (
              <div key={job.id} className="w-full flex justify-center">
                <JobsCard job={job} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
