import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteSavedJob,
  fetchSavedJobs,
  updateSavedJobs,
} from "../features/tracker/trackerSlice";
import { BsThreeDots } from "react-icons/bs";
function JobsCard({ job }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userDetails);
  const savedJobs = useSelector((state) => state.tracker.savedJobs);
  const { id, salary, company_logo, company_name, tags, title, description } =
    job;
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const data = {
    id,
    salary,
    description,
    company_logo,
    company_name,
    tags,
    title,
  };
  const newTags = tags.slice(0, 5);

  const isSaved = savedJobs.some((j) => j.id === id);
  const handleSave = async () => {
    if (user) {
      if (!isSaved) {
        dispatch(updateSavedJobs({ user, job }));
      } else {
        dispatch(deleteSavedJob({ user, id }));
      }
    } else {
      setShowMessage(true);
    }
  };
  const handleClick = () => {
    navigate(`/jobs/${id}`);
  };
  if (company_name && salary) {
    return (
      <>
        <div className="min-w-full max-w-fit   h-fit flex justify-center flex-col m-auto p-12 border border-blue-400 rounded-2xl hover:scale-3d hover:bg-gray-400 hover:delay-100 cursor-pointer bg-gray-300  font-serif  ">
          {showMessage && (
            <>
              <div className="flex items-center w-full justify-center">
                <span className="font-bold text-xs font-mono text-red-500 text-center">
                  Please Login to Save....!
                </span>
              </div>
            </>
          )}
          <div className="flex items-center justify-center w-full">
            <div>
              <img
                src={company_logo}
                alt={company_name}
                className="w-30 rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-2 max-w-fit min-w-11/12 ml-3 p-2 rounded-4xl">
              <h2 className="font-bold pl-20">👨‍💻:{title}</h2>
              <span className="pl-20 font-bold">
                Company:
                <span className="ml-2 font-medium">{company_name}</span>
              </span>
              <span className="pl-20 font-bold">
                Salary:
                <span className="ml-2 font-medium">{salary}</span>
              </span>
              <div>
                <span className="flex gap-1 items-center rounded-2xl flex-wrap p-1 pl-20 border-2 border-blue-400 ">
                  Tags:
                  {newTags?.map((tag) => (
                    <p
                      className=" p-1 rounded-xl text-emerald-500"
                      key={`${id}-${tag}`}
                    >
                      {tag}
                    </p>
                  ))}
                </span>
                <div className="flex gap-4 justify-end pr-6 m-1 items-center">
                  <button
                    onClick={handleClick}
                    className="p-2 bg-green-300 hover:bg-green-400 m-1 rounded-2xl font-light cursor-pointer text-gray-900"
                  >
                    Details
                  </button>
                  <CiHeart
                    onClick={handleSave}
                    size={"2rem"}
                    color="white"
                    fill={isSaved ? "red" : "white"}
                  />
                </div>
                <div>{loading && <BsThreeDots />}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JobsCard;
