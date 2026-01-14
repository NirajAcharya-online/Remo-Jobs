import { useSelector } from "react-redux";
import JobsCard from "../components/JobsCard";
import { Slab } from "react-loading-indicators";
import Error from "../components/Error";
function TrackerPage() {
  const { savedJobs, error, loading } = useSelector((state) => state.tracker);
  if (loading) {
    return (
      <div className="w-full flex h-11/12 overflow-hidden justify-center items-center gap-2   ">
        <Slab
          color="#234123"
          size="medium"
          text="Saved  Jobs..."
          textColor="#46c82f"
        />
      </div>
    );
  }
  if (error) {
    <div className="w-full flex h-11/12 overflow-hidden pl-20  justify-center items-center gap-2 pt-35  ">
      <Error />
    </div>;
  }
  return (
    <div className="h-full md:w-full sm:w-full m-auto lg:w-1/2 overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overflow-x-hidden ">
      {savedJobs.length > 0 && (
        <h2 className="text-center p-6 m-6 text-2xl font-bold text-red-700">
          Saved Jobs
        </h2>
      )}
      <div className="m-5 flex flex-col justify-center gap-4">
        {savedJobs.length === 0 && (
          <h2 className="text-center p-6 m-6 text-2xl font-bold text-red-700">
            No Jobs Saved
          </h2>
        )}
        {savedJobs.length > 0 &&
          savedJobs?.map((job) => <JobsCard key={job.title} job={job} />)}
      </div>
    </div>
  );
}

export default TrackerPage;
