"use client";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-3 text-center">
      {users.map((user) => (
        <div key={user.id} className="py-4 px-3 shadow-md shadow-slate-600">
          <p className="font-semibold">Name: {user.name}</p>
          <p className="my-2">Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
