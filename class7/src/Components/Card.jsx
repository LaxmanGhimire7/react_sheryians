import React from "react";

const Card = () => {
  return (
    <div className="bg-black m-10 p-7 w-100 rounded-2xl">
      <div className="flex flex-col items-center justify-center">
        <img
          className="h-24 w-24 object-center object-cover rounded-full"
          src="https://images.unsplash.com/photo-1766366467962-685c0c081b70?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h1 className="text-white">Laxman</h1>
        <p className="text-white font-semibold text-sm mt-2">+9861833371</p>
        <p className="text-white text-center font-semibold text-sm leading-tight mt-1.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          alias voluptate voluptatem, molestiae totam distinctio non a enim
          laboriosam? Placeat!
        </p>

        <button className="text-white bg-red-600 py-2 mt-3 rounded cursor-pointer active:scale-95 px-5" >Remove</button>
      </div>
    </div>
  );
};

export default Card;
