import React from "react";

import HomePageHero from "../components/homepage/HomePageHero";
import WeAllAreStiched from "../components/homepage/WeAllAreStiched";

const Homepage = () => {
  return (
    <>
      <div className="main-content">
        <HomePageHero />
        <WeAllAreStiched />
      </div>
    </>
  );
};

export default Homepage;
