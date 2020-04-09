import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import FishCards from "../Components/FishCards/FishCards";

const HomeLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <FishCards />
    </React.Fragment>
  );
};

export default HomeLayout;
