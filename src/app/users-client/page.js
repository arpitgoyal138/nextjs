// AllUsers
"use client";
import { useEffect, useState } from "react";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="space-y-4 p-4">
      <h1>All Users</h1>
      <ul>
        {users.map((user) => (
          <li
            className="shadow-md rounded-lg mb-2 bg-gray-200 p-4 text-black w-64"
            key={user.id}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
