import { useState } from "react";
import HeroSection from "../components/HeroSection.jsx";
import AuthListener from "../components/Hooks/AuthListstner.jsx";

function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <AuthListener />
      <HeroSection />
    </div>
  );
}

export default Home;
