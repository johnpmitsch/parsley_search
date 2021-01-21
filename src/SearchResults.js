import ResultCard from "./ResultCard";

const SearchResults = ({ results }) => {
    return (<>
        {results && results.map((result, i) => {
            return <ResultCard key={i} result={result} />
        })}
    </>);
}

export default SearchResults;