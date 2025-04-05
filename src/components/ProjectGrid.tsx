import { projects } from "@/hooks/data";
import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import CardContainer from "./CardContainer";
const ProjectGrid = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10}>
      {projects.map((project) => (
        <CardContainer>
          <ProjectCard project={project}></ProjectCard>
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
