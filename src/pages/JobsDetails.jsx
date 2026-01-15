import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import { IoArrowBackOutline } from "react-icons/io5";
import Error from "../components/Error.jsx";
import JobDetailsCard from "../components/JobDetailsCard";
import JobDescriptionSkeleton from "../components/Skeleton/JobDescriptionSkeleton";

function JobsDetails() {
  const { id } = useParams();
  const handleClick = () => {
    window.history.back();
  };
  const { data, isLoading, error, refetch } = useGetRemoteJobsQuery({
    category: "",
  });

  const jobs = data?.jobs || [];
  const job = jobs?.filter((job) => {
    return job.id === Number(id);
  });

  if (error) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Error onRetry={refetch} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-full w-full pt-10 px-4">
        <JobDescriptionSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col overflow-hidden p-2 sm:p-4">
      <div className="px-3 py-1 shrink-0">
        <Button
          bgColor="white"
          className="w-8 h-8 hover:cursor-pointer flex items-center justify-center rounded-full border border-gray-100"
          onClick={handleClick}
        >
          <IoArrowBackOutline className="h-5 w-5" />
        </Button>
      </div>

      {job && (
        <div className="w-full flex-grow flex justify-center items-center overflow-hidden p-2">
          <div className="w-full max-w-4xl h-[90%] md:h-[85%]">
            <JobDetailsCard data={job} />
          </div>
        </div>
      )}
    </div>
  );
}

export default JobsDetails;
