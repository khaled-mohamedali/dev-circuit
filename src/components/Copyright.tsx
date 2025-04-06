import { Text } from "@chakra-ui/react";

const Copyright = () => {
  return (
    <Text fontFamily={"Montserrat"} fontSize={"lg"}>
      {" "}
      &copy; {new Date().getFullYear()} DevCircuit, Inc. All right reserved{" "}
    </Text>
  );
};

export default Copyright;
