import React from "react";

const App = () => {
  return (
    <div className="bg-black h-screen w-scren">
      <form className="bg-white w-fit p-20">
        <input
          type="text"
          placeholder="Enter your name"
          className="border-2 rounded-sm flex px-7 items-start py-2 placeholder-gray-400"
        />
      </form>
    </div>
  );
};

export default App;
