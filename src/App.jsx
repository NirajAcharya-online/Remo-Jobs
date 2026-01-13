import { Route, Routes, useNavigate } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobsDetails from "./pages/JobsDetails";
import TrackerPage from "./pages/TrackerPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "./firebase/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { clearUser, setUser } from "./features/Authentication/userSlice";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import { fetchSavedJobs } from "./features/tracker/trackerSlice";
import AuthListener from "./components/Hooks/AuthListstner";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const unsub = onAuthStateChanged(firebaseAuth, (user) => {
  //     if (user) {
  //       dispatch(fetchSavedJobs(user));
  //       dispatch(
  //         setUser({
  //           uid: user.uid,
  //           email: user.email,
  //           displayName: user.displayName,
  //         })
  //       );
  //     } else {
  //       dispatch(clearUser());
  //     }
  //   });

  //   return () => unsub();
  // }, [dispatch]);
  return (
    <div className="h-screen w-screen min-w-screen   ">
      <Header />
      <div className="h-11/12 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobsDetails />} />
          <Route
            path="/tracker"
            element={
              <PrivateRoute>
                <TrackerPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
