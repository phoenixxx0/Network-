import React from "react";

const Users = () => {
  const users = [
    { id: 1, name: "Alice", usage: "800MB / 1GB" },
    { id: 2, name: "Bob", usage: "500MB / 1GB" },
    { id: 3, name: "Charlie", usage: "1GB / 1GB" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold">Users</h2>
      <p className="text-gray-600">View bandwidth usage of users.</p>

      <div className="mt-4 border p-4 rounded-lg shadow-lg">
        <ul>
          {users.map((user) => (
            <li key={user.id} className="py-2 border-b">
              {user.name} - <span className="text-gray-500">{user.usage}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;

