import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import { IoArrowBackOutline } from "react-icons/io5";
import Error from "../components/Error";
import JobDetailsCard from "../components/JobDetailsCard";
import JobDescriptionSkeleton from "../components/Skeleton/JobDescriptionSkeleton";
function JobsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/jobs");
  };
  const { data, isLoading, error } = useGetRemoteJobsQuery({
    selected: false,
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
          <Error message={"Something Went Wrong "} />
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
    <div className=" h-full w-full">
      <div className="ml-3 " onClick={handleClick}>
        <Button bgColor=" white " className="w-8 h-8 hover:cursor-pointer ">
          <IoArrowBackOutline className="h-8 w-8" />
        </Button>
      </div>
      {job && (
        <div className="h-11/12 w-screen">
          <JobDetailsCard data={job} />
        </div>
      )}
    </div>
  );
}

export default JobsDetails;
