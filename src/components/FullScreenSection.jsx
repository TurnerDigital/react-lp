import * as React from "react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <div
      className={`${
        isDarkBackground ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } min-h-screen flex flex-col items-center justify-center w-full`}
      style={{ ...boxProps.style }}
    >
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default FullScreenSection;
