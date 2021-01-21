import { getSuggestedQuery } from "@testing-library/react";

const SearchBar = ({ query, setQuery }) => {
    return (
        <div>
            <input name="query" value={query} onChange={e => setQuery(e.target.value)} />
        </div>
    )
}

export default SearchBar;