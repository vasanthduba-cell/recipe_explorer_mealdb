export const API_KEY = "1";
export const BASE_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}`;
export const endpoints = {
  searchByName: (query) => `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`,
  categories: `${BASE_URL}/categories.php`,
  filterByCategory: (category) => `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`,
  lookupById: (id) => `${BASE_URL}/lookup.php?i=${id}`,
  randomMeal: `${BASE_URL}/random.php`,
};