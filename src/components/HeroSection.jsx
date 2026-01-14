import React from "react";
import heroImage from "../assets/hero_image.png";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleExplore = () => {
    navigate("/jobs");
  };
  const handleSearch = () => {
    navigate("/search");
  };
  return (
    <div className="flex w-full items-center justify-center py-12 md:py-20">
      <section className="w-full max-w-7xl felx justify-center items-center h-full mx-auto px-10 py-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Find the best remote jobs and work from home
            </h1>

            <p className="mt-4 text-gray-500 text-sm md:text-base">
              Stop wasting time scrolling useless listings. Focus on real remote
              work opportunities that actually matter.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={handleExplore}
                className="px-5 py-2 rounded-xl hover:border hover:border-gray-400 cursor-pointer  bg-emerald-400 font-semibold shadow"
              >
                Explore remote jobs
              </button>

              <button
                onClick={handleSearch}
                className="cursor-pointer hover:bg-blue-400 hover:border-none px-5 py-2 rounded-xl border border-gray-400"
              >
                Search For a Job
              </button>
            </div>
          </div>

          <div className=" cursor-pointer w-full md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Remote work illustration"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
