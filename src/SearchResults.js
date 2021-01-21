import SearchBar from "./SearchBar";

const SearchResults = ({ results }) => {
    console.log(results);
    return (<>
        {results && results.map(result => {
            return <div key={result.title}>{ result.title }</div>
        })}
    </>);
}

export default SearchResults;