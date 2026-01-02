import React from "react";
import Button from "./Button";

function JobsCard({ job }) {
  const { id, salary, company_logo, company_name, job_type, tags, title } = job;
  console.log(job);
  if (company_name && salary) {
    return (
      <>
        <div className="w-1/2 h-fit flex justify-center m-auto p-15 border border-blue-400 rounded-2xl hover:scale-105 hover:delay-100 cursor-pointer bg-gray-300  font-serif ">
          <div >
            <img src={company_logo} alt={company_name} className="w-30 rounded-xl" />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-bold pl-20">{title}</h2>
            <p className="pl-20">Company:{company_name}</p>
            <p className="pl-20"> Salary:{salary}</p>
          </div>
        </div>
      </>
    );
  }
}

export default JobsCard;
