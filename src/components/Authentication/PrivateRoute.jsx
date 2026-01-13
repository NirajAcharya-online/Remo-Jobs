import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import JobCardSkeleton from "../Skeleton/JobCardSkeleton";

function PrivateRoute({ children }) {
  const user = useSelector((state) => state.user.userDetails);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); 
  }, []);
  if (loading) {
    return (
      <div className="w-11/12 h-11/12 overflow-hidden pl-20  gap-2 pt-35 flex flex-col items-center ">
        {Array.from({ length: 3 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
}
export default PrivateRoute;
