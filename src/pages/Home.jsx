import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { useSearchJobsQuery } from "../features/jobs/jobsApi";
import JobsCard from "../components/JobsCard";
import Error from "../components/Error";
import useDebounce from "../components/Hooks/Debounce";
import Loading from "../components/Loading";

function Home() {
  const [value, setValue] = useState("");
  const navigate = {
    link: "/jobs",
    message: "Explore Jobs",
  };
  const debouncedSearch = useDebounce(value.trim(), 200);
  const { data, isLoading, error, isFetching } = useSearchJobsQuery(
    debouncedSearch,
    {
      skip: debouncedSearch.length < 3,
    }
  );
  const jobs = data?.jobs ?? [];
  const isIdle = debouncedSearch.length < 3;
  const hasJobs = jobs.length > 0;
  const isEmpty = !isLoading && !isFetching && !hasJobs && !isIdle;
  if (isLoading && !hasJobs) {
    return (
      <div className="w-full h-60 flex justify-center">
        <Loading color={"red"} secColor={"blue"} />;
      </div>
    );
  }
  if (error && !hasJobs) {
    return <Error message={error.message} navigateto={navigate} />;
  }
  return (
    <div className="h-10/12 w-screen ">
      <div className="h-52 pt-6 w-full  ">
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
      {isIdle && (
        <h2 className="font-bold font-sans text-xl text-center p-4 text-green-400  shadow-2xl   max-w-fit m-auto">
          Please Search for the job..!
        </h2>
      )}
      {!isIdle && (
        <div className=" h-3/4 overflow-x-hidden flex flex-col gap-2 overflow-y-scroll">
          <h2 className="font-bold font-sans text-xl text-center mt-1 text-blue-400">
            Job Lists
          </h2>
          {jobs?.map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}

          {isEmpty && (
            <Error
              message="NO JOBS FOUND ACCORDING TO YOUR SEARCH"
              navigateto={navigate}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
