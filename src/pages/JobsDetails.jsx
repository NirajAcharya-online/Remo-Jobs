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
      <div className="h-full w-full ">
        <div className="h-60 w-screen">
          <Error onRetry={refetch} />
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="h-full w-full pt-20 ">
        <div className="h-60 w-screen">
          <JobDescriptionSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-11/12 pb-10 p-4">
      <div className="px-3 py-2">
        <Button
          bgColor="white"
          className="w-8 h-8 hover:cursor-pointer flex items-center justify-center"
          onClick={handleClick}
        >
          <IoArrowBackOutline className="h-6 w-6" />
        </Button>
      </div>

      {job && (
        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl px-3 sm:px-4 md:px-6">
            <JobDetailsCard data={job} />
          </div>
        </div>
      )}
    </div>
  );
}

export default JobsDetails;
