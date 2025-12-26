import React, { useState } from "react";

const App = () => {
  const submitHandler =(e)=>{
    e.preventDefault();
    console.log("Submitted")
  }

  const [name, setName] = useState("")
  return (
    <div>
     <form className="p-2 "
     onSubmit={(e)=>{
      submitHandler(e)
     }}>
      <input type="text" className="border" placeholder="Enter your name"
      onChange={(e)=>{
     setName( e.target.value)
      }}
      value={name} />
      <button className="bg-green-500 rounded p-2">Submit</button>
     </form>
    </div>
  );
};

export default App;
