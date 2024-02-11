import React from "react";
import FullScreenSection from "./FullScreenSection";
import Card from "./Card";
import reactSpaceImage from "../images/react-space.jpg";
import reactInfiniteScrollImage from "../images/react-infinite-scroll.jpg";
import photoGalleryImage from "../images/photo-gallery.jpg";
import eventPlannerImage from "../images/event-planner.jpg";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️.",
    imageSrc: reactSpaceImage,
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️.",
    imageSrc: reactInfiniteScrollImage,
  },
  {
    title: "Photo Gallery",
    description:
      "A one-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income.",
    imageSrc: photoGalleryImage,
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps.",
    imageSrc: eventPlannerImage,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection isDarkBackground className="mt-16">
      <div
        id="projects-section"
        className="bg-sky-900 w-screen p-16 flex flex-col items-center justify-center space-y-8"
      >
        <h2 className="mt-8 mb-4 text-4xl lg:text-4xl font-bold text-white">
          {" "}
          Featured Projects
        </h2>
        <div className="max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
};

export default ProjectsSection;
