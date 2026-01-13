import { useEffect, useState } from "react";
import { Slab } from "react-loading-indicators";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

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
        <Slab
          color="#234123"
          size="medium"
          text="Saved  Jobs..."
          textColor="#46c82f"
        />
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
}
export default PrivateRoute;
