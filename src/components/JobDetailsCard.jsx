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
      <div className="h-full w-full flex  flex-col items-center">
        <div className="h-28 w-28">
          <img
            src={data[0].company_logo}
            className="w-full h-full"
            alt={data[0].company_name}
          />
        </div>
        <div className="shadow-2xl p-4 hover:scale-105 ">
          <h1 className="text-center font-bold font-serif text-xl text-gray-400 p-4">
            ⌨️ {data[0].title}
          </h1>
          <h3 className="text-center font-mono text-blue-500">
            🌍 {data[0].candidate_required_location}
          </h3>
          <p className="text-center font-serif p-4 text-gray-600 font-semibold">
            💸 {data[0].salary}
          </p>
        </div>
        <div className="p-4 flex gap-4 flex-col justify-center items-center ">
          <div className="flex gap-4">
            <Button
              bgColor="bg-blue-300"
              className="font-serif cursor-pointer hover:scale-105 delay-300 hover:bg-blue-400 max-w-fit"
              textColor="text-gray-700 p-2 font-bold "
              onClick={hanldleClick}
            >
              {showDescription && <p>Hide Description</p>}
              {!showDescription && <p>Show Description</p>}
            </Button>
            <Button
              bgColor="bg-green-300"
              className="font-serif cursor-pointer hover:scale-105 delay-300 hover:bg-green-400 max-w-fit"
              textColor="text-gray-700 p-2 font-bold "
            >
              <a href={data[0].url} target="_blank">
                Visit Remotive
              </a>
            </Button>
          </div>
          {showDescription && (
            <Description
              className={
                "max-w-11/12 m-auto p-4 h-96 overflow-y-scroll overflow-x-hidden font-serif rounded-2xl shadow-2xl "
              }
              description={data[0].description}
            />
          )}
        </div>
      </div>
    );
  }
}

export default JobDetailsCard;
