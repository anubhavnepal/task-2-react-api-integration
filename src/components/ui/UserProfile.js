import React from "react";

const UserProfile = ({ user }) => {
  return (
    <>
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className="w-24 h-24 rounded-full border border-neutral-600 shadow-lg mb-4"
      />
      <div className="">
        <h5 className="text-lg font-semibold tracking-wider text-neutral-300 text-center">{user.name}</h5>
        <p className="text-neutral-500 text-center italic">{user.address.city}</p>
        <div className="mt-2">
          <p className="text-neutral-400/65">
            <strong className="text-neutral-400">Company:</strong> {user.company.name}
          </p>
          <p className="text-neutral-400/65">
            <strong className="text-neutral-400">Past Role:</strong> {user.company.bs}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-neutral-400/65">
            <strong className="text-neutral-400">Email:</strong> {user.email}
          </p>
          <p className="text-neutral-400/65">
            <strong className="text-neutral-400">Phone:</strong> {user.phone}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-neutral-400/65">
            <strong className="text-neutral-400">Location:</strong> {user.address.geo.lat} at {user.address.geo.lng}
          </p>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <button
            type="button"
            className="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded"
          >
            <i className="fa fa-key"></i>
          </button>
          <button
            type="button"
            className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 p-2 rounded"
          >
            <i className="fa fa-trash"></i>
          </button>
          <button
            type="button"
            className="text-yellow-500 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 p-2 rounded"
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            type="button"
            className="text-green-500 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 p-2 rounded"
          >
            <i className="fa fa-upload"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
