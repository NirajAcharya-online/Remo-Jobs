import React from "react";
import { useGetRemoteJobsQuery } from "../features/jobs/jobsApi";

function TrackerPage() {
  const { data, isLoading, isError } = useGetRemoteJobsQuery();
console.log(data);

  return <div>Hello</div>;
}

export default TrackerPage;
