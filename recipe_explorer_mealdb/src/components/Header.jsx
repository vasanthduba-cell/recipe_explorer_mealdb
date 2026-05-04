function Header({ onRandom }) {
    return (
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">API-powered recipe app</p>
          <h1>Recipe Explorer</h1>
          <p>
            Search delicious meals, browse categories, and open full recipe details
            with live data from TheMealDB.
          </p>
        </div>
        <button className="hero-btn" onClick={onRandom}>
          Surprise Me
        </button>
      </header>
    );
  }
   
  export default Header;