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
    <div className="w-full max-w-6xl mx-auto flex flex-col pt-6 pb-12 px-4 h-[90vh] overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden">
      {loading && (
        <div className="w-full h-full flex justify-center items-center mt-10">
          <Slab
            color="#234123"
            size="medium"
            text="Saved Jobs..."
            textColor="#46c82f"
          />
        </div>
      )}

      {error && !loading && (
        <div className="w-full flex justify-center items-center mt-10">
          <Error />
        </div>
      )}

      {savedJobs.length > 0 && (
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-red-700 mt-4 mb-6">
          Saved Jobs
        </h2>
      )}

      {savedJobs.length === 0 && !loading && !error && (
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-red-700 mt-10">
          No Jobs Saved
        </h2>
      )}

      {savedJobs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
          {savedJobs.map((job) => (
            <JobsCard key={job.title} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TrackerPage;
