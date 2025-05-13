import { useState, useEffect } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (!query) {
      setMatches([]);
      return;
    }

    const bodyText = document.body.innerText || '';
    const regex = new RegExp(query, 'gi');
    const found = bodyText.match(regex);
    setMatches(found || []);
  }, [query]);

  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        placeholder="Search text on this page"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <div style={{ marginTop: '1rem' }}>
        {query && (
          <p>
            Found <strong>{matches.length}</strong> match(es) for "<em>{query}</em>"
          </p>
        )}
      </div>
    </div>
  );
}