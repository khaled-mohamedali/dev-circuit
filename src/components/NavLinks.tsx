import { HStack, Link } from "@chakra-ui/react";

const NavLinks = () => {
  return (
    <HStack gap="80px" display={{ base: "none", md: "flex" }}>
      <Link>Home</Link>
      <Link>Projects</Link>
      <Link>Contact</Link>
    </HStack>
  );
};

export default NavLinks;
