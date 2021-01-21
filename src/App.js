import { useEffect, useState } from 'react';
import search from  './search';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
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
      <h1>Arstechnica search</h1>
      <SearchBar days={days} setDays={setDays} query={query} setQuery={setQuery} />
      {query ?
        (<div>
            {error ? 
              error :
              (<SearchResults results={results} />)
            }
            {results.length === 0 && <div>{'No results found!'}</div>}
        </div>) :
        (<div>{'Please enter a search term above'}</div>)
      }
   </div>
  );
}

export default App;
