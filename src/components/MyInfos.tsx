import { VStack, Box, Text } from "@chakra-ui/react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const MyInfos = () => {
  return (
    <VStack gapY={{ base: 10, lg: 100 }} alignItems="flex-start">
      <Box display={"flex"} alignItems={"center"} gap={5}>
        <FaMapLocationDot size={50} />{" "}
        <Text fontFamily={"Montserrat"} fontSize={"lg"} fontWeight={"bold"}>
          Charlotte, NC
        </Text>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={5}>
        <MdEmail size={50} />{" "}
        <Text fontFamily={"Montserrat"} fontSize={"lg"} fontWeight={"bold"}>
          Mohamedk812.ka@gmail.com
        </Text>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={5}>
        <FaPhoneSquareAlt size={50} />{" "}
        <Text fontFamily={"Montserrat"} fontSize={"lg"} fontWeight={"bold"}>
          980-382-0464
        </Text>
      </Box>
    </VStack>
  );
};

export default MyInfos;
