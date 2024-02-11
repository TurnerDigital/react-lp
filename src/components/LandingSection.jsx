import React from "react";
import FullScreenSection from "./FullScreenSection";
import avatarImage from "../images/headshot.jpg";

const avatar = "../images/headshot.jpg";
const greeting = "Hello, I'm Rob!";
const bio1 = "A Web Developer";
const bio2 = "Let's Create";

const textStyles = {
  fontSize: "32px",
  fontWeight: "bold",
};

const LandingSection = () => (
  <FullScreenSection
  isDarkBackground
  className="py-16"
  >
    <div className="flex flex-col items-center justify-center text-white">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-4">
          <img
            src={avatarImage}
            alt="Rob Turner Profile Picture"
            className="rounded-full object-cover w-48 h-48 md:w-48 md:h-48 lg:w-60 lg:h-60"
          />
        </div>
        <div className="mb-12 text-xl lg:text-2xl font-bold">
          <h3 className="">{greeting}</h3>
        </div>
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">{bio1}</h2>
          <h2 className="text-4xl lg:text-5xl font-bold">{bio2}</h2>
        </div>
      </div>
    </div>
  </FullScreenSection>
);

export default LandingSection;
