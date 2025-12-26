import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [allname, setAllname] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");

    const allNewUser = [...allname];
    // console.log(allNewUser)
    allNewUser.push(name);
    setAllname(allNewUser);
    console.log(allNewUser);
  };

  return (
    <div>
      <form
        className="p-2 "
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          className="border"
          placeholder="Enter your name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button className="bg-green-500 rounded p-2">Submit</button>
      </form>


      <div>
        {allname.map((val,idx)=>{
         return <div key={idx}>
             <h1>{val}</h1>
          </div>

        })}
      </div>
    </div>
  );
};

export default App;
