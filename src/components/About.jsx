import React from "react";
import web_home from "../assets/WebHome.png"
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web_home}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}

export default About;