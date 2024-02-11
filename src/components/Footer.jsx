import React from "react";
import {Box, Flex} from "@chakra-ui/react";

// const Footer = () => {
//   return (
//     <Box backgroundColor="#18181b">
//       <footer>
//         <Flex
//           margin="0 auto"
//           px={12}
//           color="white"
//           justifyContent="center"
//           alignItems="center"
//           maxWidth="1024px"
//           height={16}
//         >
//           <p>RobT • © 2024</p>
//         </Flex>
//       </footer>
//     </Box>
//   );

const Footer = () => {
  return (
    <div className="bg-[#18181b]">
      <footer>
        <div className="mx-auto max-w-lg flex justify-center items-center h-16 px-4 sm:px-6 md:px-8 lg:px-12">
          <p className="text-white">RobT • © 2024</p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;