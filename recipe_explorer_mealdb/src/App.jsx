import { useEffect, useMemo, useState } from "react";
import { endpoints } from "./config";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryStrip from "./components/CategoryStrip";
import MealGrid from "./components/MealGrid";
import RecipeModal from "./components/RecipeModal";
import StatusBanner from "./components/StatusBanner";
import "./App.css";

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Something went wrong while contacting the recipe server.");
  }
  return response.json();
}

function App() {
  const [query, setQuery] = useState("Arrabiata");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resultLabel = useMemo(() => {
    if (activeCategory) return `Showing meals from ${activeCategory}`;
    if (query.trim()) return `Search results for "${query}"`;
    return "Popular recipe results";
  }, [activeCategory, query]);

  const loadCategories = async () => {
    try {
      const data = await fetchJson(endpoints.categories);
      setCategories(data.categories || []);
    } catch {
      setError("Could not load categories right now.");
    }
  };

  const searchMeals = async (searchValue = query) => {
    setLoading(true);
    setError("");
    setActiveCategory("");

    try {
      const data = await fetchJson(endpoints.searchByName(searchValue));
      setMeals(data.meals || []);
    } catch {
      setError("Unable to fetch recipes. Please try again.");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  const loadCategoryMeals = async (category) => {
    setLoading(true);
    setError("");
    setActiveCategory(category);

    try {
      const data = await fetchJson(endpoints.filterByCategory(category));
      setMeals(data.meals || []);
    } catch {
      setError("Could not fetch category meals.");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  const openMeal = async (id) => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchJson(endpoints.lookupById(id));
      setSelectedMeal(data.meals?.[0] || null);
    } catch {
      setError("Could not open recipe details.");
    } finally {
      setLoading(false);
    }
  };

  const loadRandomMeal = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchJson(endpoints.randomMeal);
      const meal = data.meals?.[0] || null;
      setSelectedMeal(meal);
      if (meal) {
        setMeals([meal]);
        setActiveCategory("");
        setQuery(meal.strMeal);
      }
    } catch {
      setError("Could not load a surprise recipe.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
    searchMeals("Arrabiata");
  }, []);

  return (
    <div className="page">
      <Header onRandom={loadRandomMeal} />

      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSearch={() => searchMeals(query)}
      />

      <CategoryStrip
        categories={categories}
        activeCategory={activeCategory}
        onSelect={loadCategoryMeals}
      />

      <div className="results-head">
        <div>
          <p className="eyebrow accent">Live results</p>
          <h2>{resultLabel}</h2>
        </div>
        <span className="count-pill">{meals.length} recipes</span>
      </div>

      <StatusBanner loading={loading} error={error} />

      {!loading && !error && <MealGrid meals={meals} onOpen={openMeal} />}

      <RecipeModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
    </div>
  );
}

export default App;
