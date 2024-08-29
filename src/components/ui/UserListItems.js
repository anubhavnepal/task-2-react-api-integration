import React from "react";
import UserProfile from "./UserProfile";

const UserListItems = ({ users, className }) => {
  return (
    <ul className="flex flex-wrap -mx-4">
      {users.map((user) => (
        <li key={user.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
          <div
            className={`rounded-md p-4 flex flex-col items-center ${className}`}
          >
            <UserProfile user={user} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserListItems;
