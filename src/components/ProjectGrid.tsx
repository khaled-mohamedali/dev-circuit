import { projects } from "@/hooks/data";
import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import CardContainer from "./CardContainer";

interface Props {
  type: string | null;
}
const ProjectGrid = ({ type }: Props) => {
  const filteredProjects = type
    ? projects.filter((project) => project.type == type)
    : projects;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10}>
      {filteredProjects.map((project) => (
        <CardContainer key={project.id}>
          <ProjectCard project={project}></ProjectCard>
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
