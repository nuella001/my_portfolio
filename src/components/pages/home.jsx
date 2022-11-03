import React from "react";
import Navbar from "../Navbar";
import Hero from "../hero";
import Blogs from "./blogs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs/>
    </div>
  );
};

export default Home;
