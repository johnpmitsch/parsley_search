import './SearchBar.css';

const SearchBar = ({ query, setQuery, days, setDays }) => {
  return (
    <div className="search-container">
      <div className="query-container">
        <input
          id="query"
          name="query"
          type="search"
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
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <span> days old</span>
      </div>
    </div>
  );
};

export default SearchBar;
