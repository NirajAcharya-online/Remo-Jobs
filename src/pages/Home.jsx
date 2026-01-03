import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { useSearchJobsQuery } from "../features/jobs/jobsApi";
import JobsCard from "../components/JobsCard";
import Error from "../components/Error";
import useDebounce from "../components/Hooks/Debounce";

function Home() {
  const [value, setValue] = useState("");
  const navigate = {
    link: "/jobs",
    message: "Explore Jobs",
  };
  const debouncedSearch = useDebounce(value, 300);
  const { data, isLoading, error } = useSearchJobsQuery(debouncedSearch, {
    skip: debouncedSearch.trim().length < 3,
  });
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

      <div>
        {isLoading && (
          <h2 className="font-bold font-sans text-xl text-center mt-1">
            Loading..
          </h2>
        )}
      </div>
      {error && <Error message={"Something went wrong"} />}
      {value.length < 3 && jobs.length === 0 ? (
        <h2 className="font-bold font-sans text-xl text-center mt-1">
          Please Search for the job..!
        </h2>
      ) : (
        <div className=" h-3/4 overflow-x-hidden flex flex-col gap-2 overflow-y-scroll">
          {jobs?.map((job) => (
            <JobsCard key={job.id} job={job} />
          ))}
        </div>
      )}
      {jobs.length === 0 && value.length > 3 ? (
        <Error
          message={"NO JOBS FOUND ACCORDING TO YOUR SEARCH"}
          navigateto={navigate}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Home;
