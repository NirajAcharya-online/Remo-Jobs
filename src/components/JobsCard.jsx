import React from "react";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteJobs, updateJobs } from "../features/tracker/trackerSlice";
function JobsCard({ job }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, salary, company_logo, company_name, tags, title } = job;
  const data = {
    id,
    salary,
    company_logo,
    company_name,
    tags,
    title,
    saved: false,
  };
  const newTags = tags.slice(0, 5);
  const savedJobs = useSelector((state) => state.tracker.savedJobs);
  if (savedJobs.length > 0) {
    savedJobs?.filter((job) => {
      if (job.id === id) {
        data.saved = true;
      }
    });
  }
  const handleSave = () => {
    if (data.saved) {
      dispatch(deleteJobs(id));
    } else if (!data.saved) {
      if (savedJobs.length === 0) {
        dispatch(updateJobs(data));
        return;
      }
      dispatch(updateJobs(data));
    }
  };
  const handleClick = () => {
    navigate(`/jobs/${id}`);
  };
  if (company_name && salary) {
    return (
      <>
        <div className="min-w-1/2 max-w-fit h-fit flex justify-center m-auto p-12 border border-blue-400 rounded-2xl hover:scale-105 hover:delay-100 cursor-pointer bg-gray-300  font-serif  ">
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
                      key={Math.random() + id}
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
                    fill={data.saved ? "red" : "white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JobsCard;
