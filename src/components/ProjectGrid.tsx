import { projects } from "@/hooks/data";
import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import ProjectCardContainer from "./ProjectCardContainer";
const ProjectGrid = () => {
  return (
    <SimpleGrid columns={3} gap={10}>
      {projects.map((project) => (
        <ProjectCardContainer>
          <ProjectCard project={project}></ProjectCard>
        </ProjectCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
