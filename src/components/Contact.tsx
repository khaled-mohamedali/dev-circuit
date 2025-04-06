import { SimpleGrid } from "@chakra-ui/react";
import MyInfos from "./MyInfos";
import Form from "./Form";

const Contact = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
      <MyInfos />
      <Form />
    </SimpleGrid>
  );
};

export default Contact;
