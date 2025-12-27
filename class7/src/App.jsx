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
  };

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

      <div>
        <Card />
        {/* {allUser.map((elem, idx) => {
          return (
            <div className="bg-black p-5 h-50" key={idx}>
              <img
                src="https://images.unsplash.com/photo-1766366467962-685c0c081b70?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <h1>Laxman</h1>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default App;
