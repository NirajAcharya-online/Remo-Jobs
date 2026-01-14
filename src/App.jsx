import { Route, Routes, useNavigate } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobsDetails from "./pages/JobsDetails";
import TrackerPage from "./pages/TrackerPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import AuthListener from "./components/Hooks/AuthListstner";

function App() {
  return (
    <div className="h-screen w-full ">
      <AuthListener />
      <Header />
      <div className="h-10/12 w-full mb-0">
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
