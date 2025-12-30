import { useState } from "react";
// import Card from "./assets/Components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  const allData = JSON.parse(localStorage.getItem('all-user') || "[]");
  // console.log(allData)

  const [allUsers, setAllUsers] = useState(allData);

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log("submitted")
    const oldData = [...allUsers];
     oldData.push(...allUsers,{userName,email,role,image})
     localStorage.setItem("all-user", JSON.stringify(oldData));
     setAllUsers(oldData);
      

    
    // setAllUsers([...allUsers, { userName, email, role, image }]);

    setUserName("");
    setEmail("");
    setRole("");
    setImage("");
  };

  const handleDelete = (idx) => {
    const oldData2 = [...allUsers];
    oldData2.splice(idx, 1);

    setAllUsers(oldData2);
  //  localStorage.removeItem("all-user", JSON.stringify(oldData2));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black to-white flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="space-y-4"
        >
          <input
            className="focus:outline-none w-full p-3 focus:ring-2 focus:ring-blue-400 focus:rounded border rounded"
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            className="focus:outline-none w-full p-3 focus:ring-2 focus:ring-blue-400 focus:rounded border rounded"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="focus:outline-none w-full p-3 focus:ring-2 focus:ring-blue-400 focus:rounded border rounded"
            type="text"
            placeholder="Enter your role"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <input
            className="focus:outline-none w-full p-3 focus:ring-2 focus:ring-blue-400 focus:rounded border rounded"
            type="url"
            placeholder="Enter your img url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />

          <button className="w-full bg-emerald-600 px-2 py-2 text-white font-semibold active:scale-95 cursor-pointer">
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-center gap-5 flex-wrap">
        {allUsers.map((elem, idx) => {
          return(
          <div key={idx} className="w-[300px] rounded text-center bg-white p-5 mt-6 flex justify-center flex-col items-center">
            <img className="h-16 w-16 rounded-full" src={elem.image} alt="" />
            <h1>{elem.userName}</h1>
            <p className="uppercase text-red-500 mt-3">{elem.email}</p>
            <p className="text-sm text-emerald-500 mt-2">{elem.role}</p>
            <button onClick={(idx)=>{
              handleDelete(idx)
            }} className="mt-3 bg-red-600 w-full text-white py-3 active:scale-95 cursor-pointer">
              Remove
            </button>
          </div>
          )
        })}
      
      </div>
    </div>
  );
};

export default App;
