import { useEffect, useState } from 'react';
import search from  './search';
import SearchBar from './SearchBar';
import SearchResultsDisplay from './SearchResultsDisplay';
import './App.css'

function App() {
  const [query, setQuery] = useState("")
  const [days, setDays] = useState(null)
  const [results, setResults] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setError(null); // reset error state before sending new query
      search(query, days, setResults, (e) => setError(e));
    }
  }, [query, days])

  return (
    <div className="App">
      <h1>Arstechnica Article Search</h1>
      <SearchBar days={days} setDays={setDays} query={query} setQuery={setQuery} />
      <div className={'results-container'}>
        <SearchResultsDisplay results={results} query={query} error={error} />
      </div>
   </div>
  );
}

export default App;
