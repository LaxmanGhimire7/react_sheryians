import React from "react";

const Card = () => {
  return (
    <div className="bg-black p-5 w-100">
        <div className="flex flex-col items-center justify-center">
      <img
        className="h-24 w-24 object-center object-cover rounded-full"
        src="https://images.unsplash.com/photo-1766366467962-685c0c081b70?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h1 className="text-white">Laxman</h1>
      </div>
    </div>
  );
};

export default Card;
