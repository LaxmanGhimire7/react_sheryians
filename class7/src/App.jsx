import React from "react";
import { useState } from "react";
import Card from "./Components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState();
  const [des, setDes] = useState("");

  const [allUser, setAllUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldUser = [...allUser];
    oldUser.push({ userName, phone, des });
    setAllUser(oldUser);
    console.log(oldUser);

    setUserName("")
    setPhone("")
    setDes("")
  };

  const handleDelete = (idx) =>{
    // console.log("deleted")
    const allData = [...allUser]
    allData.splice(idx,1)
    setAllUser(allData)
    console.log(allData)
  }

  return (
    <div className="min-h-screen">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="w-full p-20 flex gap-2 flex-wrap"
      >
        <input
          type="text"
          className="bg-white border rounded w-80%"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="tel"
          className="bg-white border rounded w-80%"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="text"
          className="bg-white border rounded w-80%"
          placeholder="Enter your description"
          value={des}
          onChange={(e) => {
            setDes(e.target.value);
          }}
        />
        <button className="py-4 px-3 bg-emerald-600 rounded w-30 text-white">
          Enter
        </button>
      </form>

      <div className="flex flex-wrap gap-3">
        {/* <Card /> */}
        {allUser.map((elem, idx) => {
          return (
        <Card elem={elem} key={idx} handleDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
