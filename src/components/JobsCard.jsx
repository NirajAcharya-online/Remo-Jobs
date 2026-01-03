import React, { useId } from "react";
function JobsCard({ job }) {
  const { id, salary, company_logo, company_name, job_type, tags, title } = job;
  const newTags = tags.slice(0, 5);
  const handleClick = () => {};
  if (company_name && salary) {
    return (
      <>
        <div
          className="w-1/2 h-fit flex justify-center m-auto p-12 border border-blue-400 rounded-2xl hover:scale-105 hover:delay-100 cursor-pointer bg-gray-300  font-serif "
          onClick={handleClick()}
        >
          <div>
            <img
              src={company_logo}
              alt={company_name}
              className="w-30 rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 w-full bg-red-300 ml-3 p-2 rounded-4xl">
            <h2 className="font-bold pl-20">{title}</h2>
            <span className="pl-20 font-bold">
              Company:
              <span className="ml-2 font-medium">{company_name}</span>
            </span>
            <span className="pl-20 font-bold">
              Salary:
              <span className="ml-2 font-medium">{salary}</span>
            </span>
            <div>
              <span className="flex gap-1 flex-wrap  pl-20 ">
                Tags:
                {newTags?.map((tag) => (
                  <p
                    className="bg-blue-300 p-1 rounded-xl text-amber-200"
                    key={Math.random() + id}
                  >
                    {tag}
                  </p>
                ))}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JobsCard;
