function CategoryStrip({ categories, activeCategory, onSelect }) {
    return (
      <section className="panel">
        <div className="section-head">
          <div>
            <p className="eyebrow accent">Explore</p>
            <h2>Browse by Category</h2>
          </div>
        </div>
  
        <div className="chip-row">
          {categories.map((category) => (
            <button
              key={category.idCategory}
              className={`chip ${activeCategory === category.strCategory ? "selected" : ""}`}
              onClick={() => onSelect(category.strCategory)}
            >
              {category.strCategory}
            </button>
          ))}
        </div>
      </section>
    );
  }
  
  export default CategoryStrip;
  