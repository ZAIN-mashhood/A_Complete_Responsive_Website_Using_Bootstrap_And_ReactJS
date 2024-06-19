import React from "react";
import Common from "./Common";
import home_img from "../assets/images-removebg-preview.png"

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={home_img}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
