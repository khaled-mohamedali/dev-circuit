import {
  Button,
  Field,
  GridItem,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <form>
      <SimpleGrid
        h={"100%"}
        w={"100%"}
        templateRows="repeat(5,1fr)"
        templateColumns="repeat(2,1fr)"
        gapX={4}
      >
        <GridItem colSpan={1}>
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input placeholder="Khaled Mohamed" />
          </Field.Root>
        </GridItem>
        <GridItem colSpan={1}>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input placeholder="me@example.com" />
          </Field.Root>
        </GridItem>
        <GridItem colSpan={2}>
          <Field.Root>
            <Field.Label>Subject</Field.Label>
            <Input placeholder="Building a Mobile App" />
          </Field.Root>
        </GridItem>
        <GridItem colSpan={2} rowSpan={1}>
          <Field.Root>
            <Field.Label>Message</Field.Label>
            <Textarea placeholder="Hey I would like..." />
          </Field.Root>
        </GridItem>
        <GridItem colSpan={2}>
          <Button w={"100%"} my={10} variant={"subtle"} colorPalette={"green"}>
            Submit
          </Button>
        </GridItem>
      </SimpleGrid>
    </form>
  );
};

export default Form;
