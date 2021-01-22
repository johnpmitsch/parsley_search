const SearchBar = ({ query, setQuery, days, setDays }) => {
    return (
        <div>
            <div>
                <label for="query">Search: </label>
                <input id="query" name="query" value={query} onChange={e => setQuery(e.target.value)} />
            </div>
            <div>
                <label for="query">Days old: </label>
                <input id="days" name="days" type="number" value={days} onChange={e => setDays(e.target.value)} />
            </div>
        </div>
    )
}

export default SearchBar;