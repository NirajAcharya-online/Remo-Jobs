import { useEffect, useState } from "react";
import { Slab } from "react-loading-indicators";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Container from "../Container/Container";

function PrivateRoute({ children }) {
  const user = useSelector((state) => state.user.userDetails);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] w-full p-8 transition-opacity duration-300">
        <Slab
          color="#234123"
          size="medium"
          text="Authenticating..."
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
