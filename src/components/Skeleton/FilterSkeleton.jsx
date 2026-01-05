const FilterSkeleton = () => {
  return (
    <div className="mb-4 ">
      <div className="flex flex-wrap gap-3 justify-center animate-pulse">
        <div className="h-10 w-35 bg-gray-300 rounded-full" />
        <div className="h-10 w-24 bg-gray-300 rounded-full" />
        <div className="h-10 w-20 bg-gray-300 rounded-full" />
        <div className="h-10 w-24 bg-gray-300 rounded-full" />
        <div className="h-10 w-28 bg-gray-300 rounded-full" />
        <div className="h-10 w-24 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};

export default FilterSkeleton;
