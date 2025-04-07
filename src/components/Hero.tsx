import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import image_2 from "../assets/bg_image.png";
import Line from "./Line";
const Hero = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="center">
      <Box>
        <HStack marginEnd={10}>
          <Line
            width={20}
            color="linear-gradient(180deg, green, cyan, purple)"
            animate={false}
          />
          Welcome To My Portofilio
        </HStack>
        <Heading fontFamily="Tektur" size={{ base: "3xl", xl: "4xl" }}>
          I am <br />
          <ReactTyped
            strings={[
              " A Mobile Application Developper",
              " A Web Application Developper",
              " A Game Developper",
              " An Embededded Software Engineer",
              " A Machine Learning Engineer",
            ]}
            typeSpeed={100}
            backSpeed={70}
            loop={true} // Disable loop to keep heading fixed
            backDelay={2000} // Wait 2s before deleting (if needed)
          />
        </Heading>

        <Text fontFamily="Montserrat" fontSize={{ lg: "xl" }}>
          I design and build intelligent, connected systems—from mobile apps 📱
          and web tools 🌐 to embedded software ⚙️ and AI-driven robots 🤖.
          Passionate about innovation and always eager to learn, I turn ideas
          into impactful solutions.
        </Text>
      </Box>
      <Image src={image_2} borderRadius="20px"></Image>
    </SimpleGrid>
  );
};

export default Hero;
