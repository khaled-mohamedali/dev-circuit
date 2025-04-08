import { Badge, Box, Heading, HStack, Text } from "@chakra-ui/react";
import { FaRegHourglass } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { PiMagnifyingGlassPlusDuotone } from "react-icons/pi";

function AboutMe() {
  return (
    <Box>
      <Heading fontFamily="Tektur" fontSize={"2xl"}>
        About me
      </Heading>

      <Text fontFamily="Montserrat" fontSize={{ lg: "xl" }}>
        Hey, I’m Khaled 👋🏿 — a passionate developer focused on building
        innovative solutions across mobile 📱, web 🌍, and embedded systems ⚙️.
        From coding real-time microcontroller apps to experimenting with AI 🤖,
        I love bridging the gap between software and hardware.
        <br />
        Currently, I’m expanding my portfolio 🚧 and leveling up my skills with
        hands-on projects and collaborations. When I’m not coding, you’ll
        probably find me exploring robotics tech, tuning embedded timers, or
        reading about next-gen systems.
      </Text>

      <HStack gap={10} marginTop={2} flexWrap="wrap" justifyContent={"center"}>
        <Badge colorPalette={"cyan"} borderRadius={"full"} p={1} py={2}>
          <FaRegHourglass size={20} />
          5+ Years experience
        </Badge>

        <Badge colorPalette={"cyan"} borderRadius={"full"} p={1} py={2}>
          <GoProjectRoadmap size={20} />
          25+ Projects
        </Badge>

        <Badge colorPalette={"cyan"} borderRadius={"full"} p={1} py={2}>
          <PiMagnifyingGlassPlusDuotone size={20} /> Building Portfolio &
          Networking
        </Badge>
      </HStack>
    </Box>
  );
}

export default AboutMe;
