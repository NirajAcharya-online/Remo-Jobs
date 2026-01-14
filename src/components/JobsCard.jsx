import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteSavedJob,
  updateSavedJobs,
} from "../features/tracker/trackerSlice";
import { toast } from "react-toastify";
function JobsCard({ job }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userDetails);
  const savedJobs = useSelector((state) => state.tracker.savedJobs);
  const { id, salary, company_logo, company_name, tags, title, description } =
    job;
  const newTags = tags.slice(0, 5);
  const isSaved = savedJobs.some((j) => j.id === id);
  const handleSave = async () => {
    if (user) {
      if (!isSaved) {
        toast.promise(
          dispatch(updateSavedJobs({ user, job })).unwrap(),
          {
            pending: "Saving the Job...",
            success: "Job saved successfully! 👌",
            error: "Failed to save the job 🤯",
          },
          {
            autoClose: 800,
            style: {
              backgroundColor: "#87be6d",
              color: "#ffffff",
            },
          }
        );
      } else {
        toast.promise(
          dispatch(deleteSavedJob({ user, id })).unwrap(),
          {
            pending: "Removing job, please wait...",
            success: "Job removed successfully! 👌",
            error: "Failed to remove job 🤯",
          },
          {
            autoClose: 800,
            style: {
              backgroundColor: "#cc6565",
              color: "#ffffff",
            },
          }
        );
      }
    } else {
      toast.error("Please Login to save....!", {
        theme: "colored",
        autoClose: 1500,
        style: {
          fontWeight: "bold",
        },
      });
    }
  };

  const handleClick = () => {
    navigate(`/jobs/${id}`);
  };
  if (company_name && salary) {
    return (
      <div className="w-full sm:w-[300px] md:w-[320px] lg:w-[340px] bg-white rounded-3xl shadow-lg p-5 hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer font-sans flex flex-col">
        <div className="flex flex-col items-center gap-3">
          <img
            src={company_logo}
            alt={company_name}
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-xl"
          />
          <div className="flex flex-col gap-1 w-full">
            <h2 className="font-bold text-md sm:text-lg truncate">
              👨‍💻 {title}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              <span className="font-semibold">Company:</span> {company_name}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              <span className="font-semibold">Salary:</span> {salary}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {newTags?.map((tag) => (
                <span
                  key={`${id}-${tag}`}
                  className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center mt-3">
              <button
                onClick={handleClick}
                className=" cursor-pointer px-3 py-1 bg-green-500 hover:bg-green-600 text-white font-medium rounded-2xl transition-colors text-sm sm:text-base"
              >
                Details
              </button>
              <CiHeart
                onClick={handleSave}
                size={24}
                color={isSaved ? "red" : ""}
                className="transition-colors hover:text-green-800 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobsCard;
