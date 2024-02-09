import React from "react";
import { Avatar, Box, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarImage from "../images/headshot.jpg";

const avatar = "../images/headshot.jpg";
const greeting = "Hello, I am Rob!";
const bio1 = "A Web Developer";
const bio2 = "Let's Create";
const textStyles = {
  fontSize: "32px",
  fontWeight: "bold",
};

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={12}>
      <VStack spacing={4}>
        <Avatar src={avatarImage} size="2xl" name="Rob Turner" />
        <Heading as="h3" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={4}>
        <Heading as="h2" size="3xl">
          {bio1}
        </Heading>
        <Heading as="h2" size="3xl">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
