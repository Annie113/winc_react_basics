import {
  Box,
  Image,
  Text,
  Badge,
  Stack,
  Heading,
  List,
  ListItem,
  Divider,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import BackButton from './ui/BackButton';

const RecipePage = ({ recipe, onClose }) => {
  if (!recipe) return <Text>Loading recipe...</Text>;

  const totalNutrients = recipe.totalNutrients || {};
  const round = (num) => (typeof num === 'number' ? num.toFixed(1) : 'N/A');

  return (
    <Box p={{ base: 4, md: 6 }}>
      <BackButton onClick={onClose} label="Back to Recipes" />

      <Image
        src={recipe.image}
        alt={`Recipe: ${recipe.label}`}
        borderRadius="md"
        objectFit="cover"
        w="100%"
        maxH="400px"
        mb={6}
      />

      <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
        {/* Mealtyp, Dishtype, Cooking Time, Servings */}
        <Box flex="2">
          <Heading>{recipe.label}</Heading>

          <Text mt={4}>
            <strong>Meal Type:</strong>{' '}
            {Array.isArray(recipe.mealType) && recipe.mealType.length > 0
              ? recipe.mealType.join(', ')
              : 'N/A'}
          </Text>
          <Text>
            <strong>Dish Type:</strong>{' '}
            {Array.isArray(recipe.dishType) && recipe.dishType.length > 0
              ? recipe.dishType.join(', ')
              : 'N/A'}
          </Text>

          <Text mt={4}>
            <strong>Cooking Time:</strong>{' '}
            {typeof recipe.totalTime === 'number'
              ? `${recipe.totalTime} minutes`
              : 'N/A'}
          </Text>

          {recipe.yield && (
            <Text>
              <strong>Servings:</strong> {recipe.yield}
            </Text>
          )}

          {/* Ingredients */}
          {recipe.ingredientLines?.length > 0 && (
            <Box mt={6}>
              <Heading size="sm" mb={2}>
                Ingredients
              </Heading>
              <List spacing={1}>
                {recipe.ingredientLines.map((item, i) => (
                  <ListItem key={`${item}-${i}`}>{item}</ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Nutrients */}
          <Box mt={6}>
            <Heading size="sm">Nutrients</Heading>
            <Divider mt={2} mb={4} />

            <Stack spacing={2} fontSize="md">
              <Stat>
                <StatLabel>Energy</StatLabel>
                <StatNumber fontSize="sm" fontWeight="bold">
                  {round(totalNutrients.ENERC_KCAL?.quantity)} kcal
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Protein</StatLabel>
                <StatNumber fontSize="sm" fontWeight="bold">
                  {round(totalNutrients.PROCNT?.quantity)} g
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Fat</StatLabel>
                <StatNumber fontSize="sm" fontWeight="bold">
                  {round(totalNutrients.FAT?.quantity)} g
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Carbs</StatLabel>
                <StatNumber fontSize="sm" fontWeight="bold">
                  {round(totalNutrients.CHOCDF?.quantity)} g
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Cholesterol</StatLabel>
                <StatNumber fontSize="sm" fontWeight="bold">
                  {round(totalNutrients.CHOLE?.quantity)} mg
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Sodium</StatLabel>
                <StatNumber fontSize="sm" fontWeight="bold">
                  {round(totalNutrients.NA?.quantity)} mg
                </StatNumber>
              </Stat>
            </Stack>
          </Box>
        </Box>

        {/* Health Labels */}
        <Box flex="1" mt={16}>
          {recipe.healthLabels?.length > 0 && (
            <Box>
              <Heading size="sm" mb={2}>
                Health Labels
              </Heading>
              <Wrap spacing={2}>
                {recipe.healthLabels.map((label, i) => (
                  <WrapItem key={`${label}-${i}`}>
                    <Badge colorScheme="green">{label}</Badge>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default RecipePage;
