const JobCardSkeleton = () => {
  return (
    <div className="w-fit m-auto mt-0 mb-0" >
      <div className="border border-blue-800 rounded-2xl p-6 bg-gray-200">
        <div className="flex gap-6">
          <div className="w-20 h-20 bg-gray-300 rounded-xl animate-pulse" />

          <div className="flex-1 bg-gray-300 rounded-2xl p-6 relative animate-pulse">
            <div className="h-5 w-1/3 bg-gray-400 rounded mb-4" />

            <div className="h-4 w-1/2 bg-gray-400 rounded mb-3" />

            <div className="h-4 w-1/4 bg-gray-400 rounded mb-5" />

            <div className="flex gap-2 flex-wrap">
              <div className="h-6 w-20 bg-gray-400 rounded-full" />
              <div className="h-6 w-16 bg-gray-400 rounded-full" />
              <div className="h-6 w-24 bg-gray-400 rounded-full" />
              <div className="h-6 w-20 bg-gray-400 rounded-full" />
            </div>

            <div className="absolute bottom-4 right-4 h-6 w-6 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
