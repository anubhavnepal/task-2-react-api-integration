import React from "react";

const Inform = () => {
  return (
    <div className="shadow-lg text-neutral-300 p-10 text-center bg-neutral-800">
      <h2 className="font-semibold ">
        It fetches the data from{" "}
        <span className="text-emerald-500 font-bold italic">
          https://jsonplaceholder.typicode.com/users.{" "}
        </span>
        On successful fetch,{" "}
        <span className="text-emerald-500 font-bold italic">avatar </span>
        will be added to every json objects that contains some random pictures.
      </h2>
    </div>
  );
};

export default Inform;
