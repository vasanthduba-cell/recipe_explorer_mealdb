function SearchBar({ query, onQueryChange, onSearch }) {
    return (
      <section className="panel search-panel">
        <div className="search-wrap">
          <input
            type="text"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search meals like pasta, chicken, cake..."
          />
          <button className="primary-btn" onClick={onSearch}>
            Search
          </button>
        </div>
      </section>
    );
  }
  
  export default SearchBar;
  