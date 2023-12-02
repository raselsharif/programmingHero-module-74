import Users from "@/components/Users/Users";
import React from "react";

const UsersPage = () => {
  return (
    <div className="px-4">
      <h2 className="text-center border-b pb-3 mb-6 text-2xl font-semibold mt-4">
        Users
      </h2>
      <Users />
    </div>
  );
};

export default UsersPage;
