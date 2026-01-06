import React from "react";
const NoJobsFoundState = ({ from }) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-lg font-medium text-gray-700">No jobs found</p>
      <p className="text-sm text-gray-500 mt-2">
        Try changing keywords {from ? "or filters." : "."}
      </p>
    </div>
  );
};
export default NoJobsFoundState;
