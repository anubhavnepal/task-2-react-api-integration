import React, { useState, useEffect } from "react";
import { fetchData } from "../data/index";
import UserListItems from "./ui/UserListItems";

const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchData(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading)
    return (
      <div
        data-testid="loading"
        className="text-neutral-300 font-bold text-center bg-neutral-800 shadow-lg w-fit m-auto px-10 py-5 mt-10 text-lg tracking-wide"
      >
        <span className="text-emerald-500 font-bold italic">Hang On! </span>
        Loading the data
      </div>
    );

  if (error)
    return (
      <div
        data-testid="error"
        className="text-neutral-300 font-bold text-center bg-red-900 w-fit m-auto px-10 py-5 mt-10 text-lg tracking-wide"
      >
        Error: <span className="font-semibold"> {error}</span>
      </div>
    );

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div
        data-testid="user-grid"
        className="p-6 bg-neutral-800 space-y-6 shadow-lg rounded-lg overflow-hidden"
      >
        <div className="flex justify-between items-center">
          <h5
            data-testid="header"
            className="text-2xl font-semibold text-neutral-300"
          >
            Users Details
          </h5>
          <p className="text-neutral-400 italic">
            Powered By
            <span className="text-emerald-500 font-bold tracking-wide">
              {" "}
              Vrit Technologies
            </span>{" "}
          </p>
        </div>
        <UserListItems
          users={users}
          className="shadow-xl bg-neutral-800 border border-neutral-700"
        />
      </div>
    </div>
  );
};

export default UserGrid;
