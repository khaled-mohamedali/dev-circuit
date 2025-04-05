import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/TextWithImage";
import ExperienceGrid from "./components/ExperienceGrid";
import ProjectGrid from "./components/ProjectGrid";

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
