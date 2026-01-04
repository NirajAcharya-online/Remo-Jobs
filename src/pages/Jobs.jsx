import React, { useState } from "react";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import JobsCard from "../components/JobsCard";
import Loading from "../components/Loading";
import Filter from "../components/Filter";

function Jobs() {
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState(false);
  const { data, isLoading, error } = useGetRemoteJobsQuery({
    selected,
    category,
  });
  const jobs = data?.jobs ?? [];
  return (
    <div className="w-screen m-auto h-[90%] pt-20 pb-20 overflow-scroll overflow-x-hidden">
      {isLoading && <Loading color={"pink"} secColor={"blue"} />}

      {!isLoading && (
        <div className="flex flex-col">
          <Filter setCategory={setCategory} setSelected={setSelected} />
          <div className="flex flex-wrap justify-start gap-3.5">
            {jobs.length === 0 && <h2   className="text-center w-full font-bold p-4 text-3xl text-red-500 font-serif">NO JOBS FOUND</h2>}
            {jobs?.map((job) => (
              <JobsCard key={`remote-${job.id}`} job={job} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
