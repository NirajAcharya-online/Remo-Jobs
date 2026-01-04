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
  const debouncedSearch = useDebounce(value.trim(), 300);
  const { data, isLoading, error, isFetching } = useSearchJobsQuery(
    debouncedSearch,
    {
      skip: debouncedSearch.length < 3,
    }
  );
  const jobs = data?.jobs ?? [];

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
      {isLoading && <Loading color={"red"} secColor={"blue"} />}
      {error && <Error message={"Something went wrong"} />}
      {value.length < 3 ? (
        <h2 className="font-bold font-sans text-xl text-center mt-1">
          Please Search for the job..!
        </h2>
      ) : (
        <div className=" h-3/4 overflow-x-hidden flex flex-col gap-2 overflow-y-scroll">
          {jobs?.map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
          {!isFetching && jobs.length === 0 && value.length >= 3 && (
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
