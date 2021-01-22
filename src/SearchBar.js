import './SearchBar.css';

const SearchBar = ({ query, setQuery, days, setDays }) => {
  return (
    <div className="search-container">
      <div className="query-container">
        <input
          id="query"
          name="query"
          type="search"
          aria-label="search bar"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="number-container">
        <span>limit to </span>
        <input
          id="days"
          name="days"
          type="number"
          aria-label="days old input"
          // defaulting to blank string so react doesn't complain about using undefined in controlled components
          value={days || ''}
          onChange={(e) => setDays(e.target.value)}
        />
        <span> days old</span>
      </div>
    </div>
  );
};

export default SearchBar;
