import { Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobsDetails from "./pages/JobsDetails";
import TrackerPage from "./pages/TrackerPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen w-screen min-w-screen ">
      <Header />
      <div className="h-11/12 w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobsDetails />} />
          <Route path="/tracker" element={<TrackerPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
