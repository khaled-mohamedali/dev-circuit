import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={`"nav"
                  "hero"
                  "skills"
                  "projects"
                  "experience"
                  "contact"
                  "footer"`}
      gridTemplateRows={"auto auto auto auto auto auto auto"}
      gridTemplateColumns={"1fr"}
      gap={6}
      p={4}
      bg="gray.500"
    >
      {/* Header */}
      <GridItem area="nav" bg="white" boxShadow="md">
        Nav
      </GridItem>

      {/* Hero Section */}
      <GridItem area="hero">Hero</GridItem>

      {/* Skills Section */}
      <GridItem area="skills">Skills</GridItem>

      {/* Projects Section */}
      <GridItem area="projects">Projects</GridItem>

      {/* Experience Section */}
      <GridItem area="experience">Experience</GridItem>

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
