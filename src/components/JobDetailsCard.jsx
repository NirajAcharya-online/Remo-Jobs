import React, { useState } from "react";
import Button from "./Button";
import Description from "./Description";

function JobDetailsCard({ data }) {
  const [showDescription, setShowDescription] = useState(true);
  const hanldleClick = () => {
    setShowDescription((prev) => !prev);
  };

  if (data.length > 0) {
    return (
      <div className="h-full w-full flex flex-col items-center overflow-hidden bg-white rounded-2xl shadow-2xl border border-gray-100">
        <div className="flex flex-col items-center shrink-0 p-4 border-b border-gray-50 w-full">
          <div className="h-16 w-16 md:h-20 md:w-20">
            <img
              src={data[0].company_logo}
              className="w-full h-full object-contain"
              alt={data[0].company_name}
            />
          </div>
          <div className="text-center mt-2">
            <h1 className="font-bold font-serif text-lg md:text-xl text-gray-700 px-2">
              {data[0].title}
            </h1>
            <p className="text-blue-500 font-mono text-xs md:text-sm">
              🌍 {data[0].candidate_required_location}
            </p>
            <p className="text-gray-500 font-serif text-xs md:text-sm font-bold">
              💸 {data[0].salary || "Not Specified"}
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <Button
              bgColor="bg-blue-300"
              className="font-serif cursor-pointer hover:bg-blue-400 px-4 py-1.5 rounded-lg text-xs md:text-sm font-bold"
              onClick={hanldleClick}
            >
              {showDescription ? "Hide Info" : "Show Info"}
            </Button>
            <a href={data[0].url} target="_blank" rel="noreferrer">
              <Button
                bgColor="bg-green-300"
                className="font-serif cursor-pointer hover:bg-green-400 px-4 py-1.5 rounded-lg text-xs md:text-sm font-bold"
              >
                Apply
              </Button>
            </a>
          </div>
        </div>

        {showDescription && (
          <div className="flex-1 w-full overflow-y-auto min-h-0 p-4 md:p-6 bg-gray-50/30 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <Description
              className="font-serif text-gray-600 leading-relaxed text-sm md:text-base"
              description={data[0].description}
            />
          </div>
        )}
      </div>
    );
  }
}

export default JobDetailsCard;
