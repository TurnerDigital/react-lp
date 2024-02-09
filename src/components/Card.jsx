import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { withTheme } from "@emotion/react";

const Card = ({ title, description, imageSrc }) => {

  return (
    <Box   
    bg='#323238' 
    borderRadius='30px'
    boxShadow='0px 14px 23px 0px rgba(0, 0, 0, 0.5)'
    overflow='hidden'
    cursor={"pointer"}
    >
      <Image src={imageSrc} alt={title} borderRadius='30px 30px 0 0' />
      <Box p='6'>
        <Heading as='h3' size='md' color='#fff'>
          {title}
        </Heading>
        <Text mt='6' color='#fff'>
          {description}
        </Text>
        <Text mt='6' color='#fff' fontWeight='bold'>
          See More  <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
      </Box>
    </Box>
  );
};

export default Card;