import { Box, Heading } from '@chakra-ui/react';

const Header = ({ greeting }) => {
  return (
    <Box
      bg="#fff"
      borderBottom="1px solid #EFEEEA"
      py={16}
      px={4}
      width="1200px"
      mx="auto"
      position="relative"
      left="0"
      textAlign="center"
    >
      <Heading as="h1" size="2xl" color="#447632" bg="rgba(255, 255, 255, 0.8)" display="inline-block" px={4} py={2} borderRadius="md">
        {greeting}
      </Heading>
    </Box>
  );
};

export default Header;
