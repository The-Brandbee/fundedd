"use client";
import { useState, useMemo } from "react";
import posts from "../common/data.js";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {query && (
        <div>
          {filteredResults.length > 0 ? (
            <ul>
              {filteredResults.map((post) => (
                <li key={post.id} className="mb-3">
                  <strong className="block text-lg">{post.title}</strong>
                  <p className="text-sm text-gray-600">{post.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}
