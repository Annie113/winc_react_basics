import { SearchBar } from '../components/SearchBar'; // Import SearchBar
import RecipeGrid from '../components/RecipeGrid'; // Import RecipeGrid

export const RecipeListPage = ({ recipes, setQuery, setSelectedRecipe }) => {
  return (
    <div>
      {/* Search bar for filtering recipes */}
      <SearchBar setQuery={setQuery} />
      
      {/* Recipe grid showing filtered recipes */}
      <RecipeGrid recipes={recipes} setSelectedRecipe={setSelectedRecipe} />
    </div>
  );
};
