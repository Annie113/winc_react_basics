import { useState, useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { data } from './utils/data';
import { RecipeListPage } from './pages/RecipeListPage';
import RecipePage from './components/RecipePage';
import Header from './components/Header'; 

export const App = () => {
  const [query, setQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const greeting = 'Welcome to my recipe app!';

  const filteredRecipes = useMemo(() => {
    if (!query) return data.hits;

    const lowerQuery = query.toLowerCase();

    return data.hits.filter(({ recipe }) => {
      const {
        label,
        healthLabels = [],
        dietLabels = [],
        mealType = [],
        dishType = [],
      } = recipe;

      const filteredHealthLabels = healthLabels.filter(label =>
        !label.toLowerCase().includes('pork-free')
      );

      const labelMatch = label.toLowerCase().includes(lowerQuery);
      const healthLabelsMatch = filteredHealthLabels.some(label =>
        label.toLowerCase().includes(lowerQuery)
      );
      const dietLabelsMatch = dietLabels.some(label =>
        label.toLowerCase().includes(lowerQuery)
      );
      const mealTypeMatch = mealType.some(meal =>
        meal.toLowerCase().includes(lowerQuery)
      );
      const dishTypeMatch = dishType.some(dish =>
        dish.toLowerCase().includes(lowerQuery)
      );

      return (
        labelMatch ||
        healthLabelsMatch ||
        dietLabelsMatch ||
        mealTypeMatch ||
        dishTypeMatch
      );
    });
  }, [query]);

  const handleRecipeSelect = (recipe) => setSelectedRecipe(recipe);
  const handleRecipeClose = () => setSelectedRecipe(null);

  return (
    <Box width="100%" mx="auto" p={4}>
      {/* Header */}
      {!selectedRecipe && <Header greeting={greeting} />}

      {/* Content section */}
      <Box maxW="1200px" mx="auto">
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} onClose={handleRecipeClose} />
        ) : (
          <RecipeListPage
            recipes={filteredRecipes}
            setQuery={setQuery}
            setSelectedRecipe={handleRecipeSelect}
          />
        )}
      </Box>
    </Box>
  );
};
