import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function Home() {
  const [ value , setValue] =useState()
  return (
    <>
      <Input placeholder="Search for job..."  ></Input>
      <Button type="submit">Search</Button>
      <div>Home</div>
    </>
  );
}

export default Home;
