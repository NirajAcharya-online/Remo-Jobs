import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobsCard from "../components/JobsCard";
import { fetchSavedJobs } from "../features/tracker/trackerSlice";
import { Slab } from "react-loading-indicators";

function TrackerPage() {
  const user = useSelector((state) => state.user.userDetails);
  const save = useSelector((state) => state.tracker.savedJobs);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchSavedJobs(user));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="w-full flex  h-11/12 overflow-hidden pl-20  justify-center items-center gap-2 pt-35  ">
        <Slab
          color="#234123"
          size="medium"
          text="Saved  Jobs..."
          textColor="#46c82f"
        />
      </div>
    );
  }
  return (
    <div className="h-full min-w-full m-auto max-w-8/12 overflow-scroll overflow-x-hidden ">
      {save.length > 0 && (
        <h2 className="text-center p-6 m-6 text-2xl font-bold text-red-700">
          Saved Jobs
        </h2>
      )}
      <div className="m-5 flex flex-col justify-center gap-4">
        {save.length === 0 && (
          <h2 className="text-center p-6 m-6 text-2xl font-bold text-red-700">
            No Jobs Saved
          </h2>
        )}
        {save.length > 0 &&
          save?.map((job) => <JobsCard key={job.title} job={job} />)}
      </div>
    </div>
  );
}

export default TrackerPage;
