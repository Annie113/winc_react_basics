import { Box, Input, Flex } from '@chakra-ui/react';

export const SearchBar = ({ setQuery }) => {
  return (
    <Box
      py={14} // Padding for vertical spacing
      px={4} // Padding for horizontal spacing
    >
      <Flex justify="center" align="center">
        <Box w="100%" maxW="500px">
          <Input
            placeholder="Search for a recipe..."
            onChange={(e) => setQuery(e.target.value)}
            size="md"
            borderRadius="md"
            borderColor="#EFEEEA"
            border="1.5px solid #bab9ac"
            _placeholder={{ color: '#777a79' }}
            _hover={{ boxShadow: 'xs', borderColor: '#a9c49e' }}
            focusBorderColor="#a9c49e"
          />
        </Box>
      </Flex>
    </Box>
  );
};
