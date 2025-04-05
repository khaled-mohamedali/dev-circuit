import { SimpleGrid } from "@chakra-ui/react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/hooks/data";

const ExperienceGrid = () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
        ></ExperienceCard>
      ))}
    </SimpleGrid>
  );
};

export default ExperienceGrid;
