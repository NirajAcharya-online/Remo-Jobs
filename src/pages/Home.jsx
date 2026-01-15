import { useState } from "react";
import HeroSection from "../components/HeroSection.jsx";
import AuthListener from "../components/Hooks/AuthListstner.jsx";
import Container from "../components/Container/Container.jsx";

function Home() {
  return (
    <>
      <AuthListener />
      <Container>
        <HeroSection />
      </Container>
    </>
  );
}

export default Home;
