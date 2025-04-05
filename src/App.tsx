import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/TextWithImage";
import ExperienceGrid from "./components/ExperienceGrid";
import ProjectGrid from "./components/ProjectGrid";
import { FaGlobe } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { BsCpuFill } from "react-icons/bs";
import { IoLogoGameControllerB } from "react-icons/io";
import Ai from "./components/Ai";

function App() {
  return (
    <Grid
      templateAreas={`"nav"
                  "hero"
                  "aboutme"
                  "experience"
                  "projects"
                  "skills"
                  "contact"
                  "footer"`}
      gridTemplateRows={"auto auto auto auto auto auto auto"}
      gridTemplateColumns={"1fr"}
      gap={10}
      py={3}
      mx={{ base: "20px", xl: "350px" }}
    >
      {/* Header */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Hero Section */}
      <GridItem area="hero">
        <Hero></Hero>
      </GridItem>

      {/* Skills Section */}
      <GridItem area="aboutme">
        <AboutMe />
      </GridItem>

      {/* Experience Section */}
      <GridItem area="experience">
        <ExperienceGrid />
      </GridItem>

      {/* Projects Section */}
      <GridItem area="projects">
        <VStack py={10}>
          <Heading fontFamily={"Tektur"} fontSize={"2xl"}>
            Featured Projects
          </Heading>
          <Box bg={"green.500"} h={"5px"} w={"200px"}></Box>
          <HStack>
            <Button
              variant={"outline"}
              borderRadius={"full"}
              colorPalette={"green"}
            >
              {" "}
              All Projects
            </Button>
            <Button variant={"outline"} borderRadius={"full"}>
              {" "}
              <FaMobile />
              Mobile App
            </Button>
            <Button variant={"outline"} borderRadius={"full"}>
              {" "}
              <FaGlobe /> Web App
            </Button>
            <Button variant={"outline"} borderRadius={"full"}>
              {" "}
              <BsCpuFill />
              Embedded Systems
            </Button>
            <Button variant={"outline"} borderRadius={"full"}>
              {" "}
              <IoLogoGameControllerB />
              Games
            </Button>
            <Button variant={"outline"} borderRadius={"full"}>
              {" "}
              <Ai />
              AI
            </Button>
          </HStack>
        </VStack>
        <ProjectGrid />
      </GridItem>

      {/* Skills Section */}
      <GridItem area="skills">Skills</GridItem>

      {/* Contact Section */}
      <GridItem area="contact">Contact</GridItem>

      {/* Footer */}
      <GridItem area="footer" bg="gray.800" color="white">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
