import { extractIngredients, getYoutubeEmbed } from "../data/helpers";

function RecipeModal({ meal, onClose }) {
  if (!meal) return null;

  const ingredients = extractIngredients(meal);
  const videoUrl = getYoutubeEmbed(meal.strYoutube);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-hero">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div>
            <p className="eyebrow accent">Recipe details</p>
            <h2>{meal.strMeal}</h2>
            <div className="meta-row">
              <span>{meal.strCategory}</span>
              <span>{meal.strArea}</span>
              <span>ID: {meal.idMeal}</span>
            </div>
          </div>
        </div>

        <div className="modal-grid">
          <section className="modal-section">
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3>Instructions</h3>
            <p>{meal.strInstructions}</p>
          </section>
        </div>

        {videoUrl && (
          <section className="modal-section video-box">
            <h3>Recipe Video</h3>
            <iframe
              src={videoUrl}
              title={meal.strMeal}
              allowFullScreen
            ></iframe>
          </section>
        )}
      </div>
    </div>
  );
}

export default RecipeModal;
