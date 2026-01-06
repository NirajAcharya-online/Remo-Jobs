const JobDescriptionSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-10 animate-pulse">
      <div className="flex items-center flex-col justify-center gap-6">
        <div className="w-20 h-20 bg-gray-300 rounded-xl" />

        <div className="flex flex-col gap-2">
          <div className="h-4 w-40 bg-gray-300 rounded" />
          <div className="h-4 w-32 bg-gray-300 rounded" />
          <div className="h-4 w-28 bg-gray-300 rounded" />
        </div>
      </div>

      <div className="space-y-4 pt-20">
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-11/12 bg-gray-300 rounded" />
        <div className="h-4 w-10/12 bg-gray-300 rounded" />
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-9/12 bg-gray-300 rounded" />
        <div className="h-4 w-8/12 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default JobDescriptionSkeleton;
