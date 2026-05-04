export function extractIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i += 1) {
      const ingredient = meal[`strIngredient${i}`]?.trim();
      const measure = meal[`strMeasure${i}`]?.trim();
      if (ingredient) {
        ingredients.push(`${measure ? measure + " " : ""}${ingredient}`.trim());
      }
    }
   
    return ingredients;
  }
  export function getYoutubeEmbed(url) {
    if (!url) return "";
    const match = url.match(/(?:v=|be\/)([A-Za-z0-9_-]{6,})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  }