import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

import "../index.css";

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
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income.",
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
    <FullScreenSection>
      <div className="bg-gray-800 p-16 flex flex-col items-start space-y-8">
        <h1 className="text-3xl font-bold text-white">Featured Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
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


/* 
const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#512DA8"
      isDarkBackground
      p={16}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={12}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};
 */