import React from "react";

const Card = () => {
  return (
    <div className="w-[300px] rounded text-center bg-white p-5 mt-6 flex justify-center flex-col items-center">
      <img
        className="h-16 w-16 rounded-full"
        src="https://i.pinimg.com/736x/55/a2/52/55a25249bb2674b8f17e5884a788410f.jpg"
        alt=""
      />
      <h1>Laxman</h1>
      <p className="uppercase text-red-500 mt-3">ghimirelaxman2155@gmail.com</p>
      <p className="text-sm text-emerald-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        tempora, consectetur temporibus consequatur enim numquam.
      </p>
      <button className="mt-3 bg-red-600 w-full text-white py-3 active:scale-95 cursor-pointer">Remove</button>
    </div>
  );
};

export default Card;
