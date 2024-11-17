import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore(
    state => ({ recommendations: state.recommendations, generateRecommendations: state.generateRecommendations })
  );

  // Call generateRecommendations on component mount
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]); // Dependency array

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Try adding some favorites!</p>
      )}
    </div>
  );
};

export default RecommendationsList;