import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Badge,
  Flex
} from '@chakra-ui/react';

const RecipeGrid = ({ recipes, setSelectedRecipe }) => {
  const filterLabels = (dietLabels = [], healthLabels = []) => [
    ...dietLabels,
    ...healthLabels.filter(label => ['Vegan', 'Vegetarian', 'Pescatarian'].includes(label)),
  ];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} p={4}>
      {recipes.map(({ recipe }) => {
        const labels = filterLabels(recipe.dietLabels, recipe.healthLabels);

        return (
          <Box
            key={recipe.url}
            onClick={() => setSelectedRecipe(recipe)}
            borderRadius="md"
            boxShadow="sm"
            cursor="pointer"
            transition="0.2s ease-in-out"
            role="button"
            aria-label={`View details for ${recipe.label}`}
            _hover={{
              boxShadow: 'md',
              transform: 'scale(1.03)',
              bg: 'white.50',
            }}
          >
            <Image
              src={recipe.image}
              alt={recipe.label}
              borderTopLeftRadius="md"
              borderTopRightRadius="md"
              objectFit="cover"
              w="100%"
              h="200px"
            />
            <Box p={4}>
              {/* Recipe Title */}
              <Text fontSize="xl" fontWeight="bold" noOfLines={1} mb={3}>
                {recipe.label || 'No Title'}
              </Text>

              {/* Meal Type and Dish Type */}
              <Flex
                direction="row"
                justify="space-between"
                align="center"
                pb={6}
                mb={6}
                borderBottom="1px solid #EFEEEA"
              >
                <Text fontSize="xs" color="#777a79">
                  <strong>Meal Type:</strong> {recipe.mealType?.join(', ') || 'N/A'}
                </Text>
                <Text fontSize="xs" color="#777a79">
                  <strong>Dish Type:</strong> {recipe.dishType?.join(', ') || 'N/A'}
                </Text>
              </Flex>

              {/* Health Labels */}
              {labels.length > 0 && (
                <Flex wrap="wrap" gap={2} mt={2}>
                  {labels.map((label) => (
                    <Badge
                      key={label}
                      colorScheme={
                        ['Vegan', 'Vegetarian', 'Pescatarian'].includes(label) ? 'green' : 'blue'
                      }
                      maxW="100%"
                    >
                      {label}
                    </Badge>
                  ))}
                </Flex>
              )}

              {/* Cautions */}
              {recipe.cautions?.length > 0 && (
                <Flex wrap="wrap" gap={2} mt={2}>
                  {recipe.cautions.map((caution) => (
                    <Badge key={caution} colorScheme="red" maxW="100%">
                      {caution}
                    </Badge>
                  ))}
                </Flex>
              )}
            </Box>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default RecipeGrid;
