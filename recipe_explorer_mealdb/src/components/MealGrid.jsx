function MealGrid({ meals, onOpen }) {
    if (!meals.length) {
      return (
        <section className="empty-state">
          <h2>No meals found yet</h2>
          <p>Try a different keyword or click a category to discover recipes.</p>
        </section>
      );
    }
  
    return (
      <section className="meal-grid">
        {meals.map((meal) => (
          <article key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="meal-card-body">
              <h3>{meal.strMeal}</h3>
              {meal.strCategory && <p>{meal.strCategory}</p>}
              <button className="card-btn" onClick={() => onOpen(meal.idMeal)}>
                View Recipe
              </button>
            </div>
          </article>
        ))}
      </section>
    );
  }
  
  export default MealGrid;
  