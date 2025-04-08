import { HStack, Link } from "@chakra-ui/react";

const NavLinks = () => {
  return (
    <HStack
      gap="80px"
      display={{ base: "none", md: "flex" }}
      // marginRight={{ xl: "80px" }}
    >
      <Link>Home</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>
    </HStack>
  );
};

export default NavLinks;
