import React, { useState } from "react";
import { searchUsers } from "../api/helpers";

function UserSearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const users = await searchUsers(query);
    setResults(users);
  };

  return (
    <div>
      <h2>Search Users</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by username..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserSearchPage;
