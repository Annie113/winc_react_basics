import { Box, Heading } from '@chakra-ui/react';

const Header = ({ greeting }) => {
  return (
    <Box
      bg="#f0f4e2"
      py={16}
      px={4}
      width="100%"
      position="relative"
      left="0"
      textAlign="center"
    >
      <Heading as="h1" size="2xl" color="#447632">
        {greeting}
      </Heading>
    </Box>
  );
};

export default Header;
