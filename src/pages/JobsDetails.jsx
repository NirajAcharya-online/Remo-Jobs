import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";
import { IoArrowBackOutline } from "react-icons/io5";
import Error from "../components/Error";
import Loading from "../components/Loading";
function JobsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/jobs");
  };
  const { data, isLoading, error } = useGetRemoteJobsQuery();

  const jobs = data?.jobs || [];
  const job = jobs?.filter((job) => {
    return job.id === Number(id);
  });
  console.log(job);

  return (
    <div div className=" h-full w-full">
      {error && (
        <div className="h-60 w-screen">
          <Error message={"Something Went Wrong "} />
        </div>
      )}
      {isLoading && <Loading color={"blue"} secColor={"red"} />}
      <div className="ml-3 " onClick={handleClick}>
        <Button bgColor=" white " className="w-8 h-8 hover:cursor-pointer ">
          <IoArrowBackOutline className="h-8 w-8" />
        </Button>
      </div>
      <div className="h-11/12 w-screen"></div>
    </div>
  );
}

export default JobsDetails;
