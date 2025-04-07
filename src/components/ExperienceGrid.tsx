import { SimpleGrid } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/hooks/data";
import CardContainer from "./CardContainer";

const ExperienceGrid = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10}>
      {experiences.map((experience) => (
        <CardContainer key={experience.id}>
          <ExperienceCard
            key={experience.id}
            experience={experience}
          ></ExperienceCard>
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ExperienceGrid;
