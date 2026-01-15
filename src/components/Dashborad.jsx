import React, { useState, useEffect } from "react";
import { Bookmark, User, MapPin, Mail, Pencil, X, Save } from "lucide-react";
import { useSelector } from "react-redux";
import { getUser, updateUser } from "../firebase/database";
import EditButton from "../components/EditButton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DashboardSkeleton from "./Skeleton/DashboardSkeleton";
const Dashboard = () => {
  const [userDetails, setUserDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const [formDetails, setFormDetails] = useState({
    location: "",
    role: "",
    availibility: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const users = useSelector((state) => state.user.userDetails);
  const savedJobs = useSelector((state) => state.tracker.savedJobs);
  const navigate = useNavigate();
  async function getUserDetais() {
    const details = await getUser(users);
    setUserDetails(details);
    setFormDetails({
      location: details.location || "",
      role: details.role || "",
      availibility: details.availibility || "",
    });
    setLoading(false);
  }

  async function handleUpdate() {
    await updateUser(users, formDetails);
    setUserDetails((prev) => ({
      ...prev,
      ...formDetails,
    }));
    setIsEditing(false);
    toast.success("Updated Successfully!", {
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  useEffect(() => {
    if (users) {
      getUserDetais();
    }
  }, [users]);

  if (loading) return <DashboardSkeleton />;
  return (
    <div className="min-h-11/12 bg-gray-50 p-4 md:p-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Candidate Dashboard
            </h1>
            <p className="text-gray-500 text-sm font-medium">
              Manage your remote job search
            </p>
          </div>
          <EditButton
            isEditing={isEditing}
            handleUpdate={handleUpdate}
            setIsEditing={setIsEditing}
          />
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {userDetails?.displayName?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {userDetails?.displayName}
                  </h2>
                  {isEditing ? (
                    <input
                      className="mt-1 text-sm border-b border-blue-400 focus:outline-none"
                      value={formDetails.role}
                      onChange={(e) =>
                        setFormDetails({ ...formDetails, role: e.target.value })
                      }
                      placeholder="Enter Role"
                    />
                  ) : (
                    <p className="text-blue-600 font-medium">
                      {userDetails?.role || "Set your role"}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-100" />

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={18} className="text-gray-400" />
                <span>{userDetails?.email}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} className="text-gray-400" />
                {isEditing ? (
                  <input
                    className="text-sm border-b border-gray-300 focus:outline-none w-full"
                    value={formDetails.location}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        location: e.target.value,
                      })
                    }
                    placeholder="Location"
                  />
                ) : (
                  <span>{userDetails?.location || "Location not set"}</span>
                )}
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <User size={18} className="text-gray-400" />
                {isEditing ? (
                  <select
                    className="text-sm border-b border-gray-300 focus:outline-none w-full bg-transparent"
                    value={formDetails.availibility}
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        availibility: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Availability</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                ) : (
                  <span>
                    {userDetails?.availibility || "Availability not set"}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="bg-blue-600 rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center text-white">
            <div className="bg-white/20 p-3 rounded-xl mb-4">
              <Bookmark size={28} fill="white" />
            </div>
            <p className="text-blue-100 text-sm font-medium uppercase tracking-wider">
              Saved Jobs
            </p>
            <h3 className="text-5xl font-bold mt-2">{savedJobs.length}</h3>
            <button
              onClick={() => {
                navigate("/tracker");
              }}
              className="mt-6 w-full py-2 px-1 cursor-pointer bg-white text-blue-600 font-semibold rounded-lg hover:bg-green-300 transition-colors text-sm"
            >
              View Saved Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
