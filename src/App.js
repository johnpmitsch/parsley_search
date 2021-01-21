import { useEffect, useState } from 'react';
import search from  './search';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  const [query, setQuery] = useState("")
  const [days, setDays] = useState(null)
  const [results, setResults] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setError(null); // reset error state
      search(query, days, setResults, (e) => setError(e));
    }
  }, [query, days, search, setResults, setError])

  return (
    <div className="App">
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
