import React from "react";
import { useParams } from "react-router-dom";

function JobsDetails() {
  const { jobsId } = useParams();
  console.log(jobsId);
  
  return (
    <div>
      JobsDetails
      {jobsId}
    </div>
  );
}

export default JobsDetails;
