import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [image, setImage] = useState("");

  const storeData = JSON.parse(localStorage.getItem("all-user")) || [];

  const [allUser, setAllUser] = useState(storeData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !userName.trim() ||
      !userDescription.trim() ||
      !userRole.trim() ||
      !image.trim() ||
      !userEmail.trim()
    ) {
      alert("Enter all value");
      return;
    }

    const allData = [...allUser];
    allData.push({ userName, userEmail, userRole, userDescription, image });
    setAllUser(allData);
    localStorage.setItem("all-user", JSON.stringify(allData));
    console.log(allData);

    setUserName("");
    setUserEmail("");
    setUserRole("");
    setUserDescription("");
    setImage("");
  };

  const handleDelete = (idx) => {
    const oldData = [...allUser];
    oldData.splice(idx, 1);
    setAllUser(oldData);
    localStorage.setItem("all-user", JSON.stringify(oldData));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-bg-gray-500 to-black p-14">
      <div className="bg-white rounded-2xl m-auto w-[450px]">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="p-8"
        >
          <input
            className="w-96 mt-3 rounded border px-2 py-3"
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            className="w-96 mt-3 rounded border px-2 py-3"
            type="text"
            placeholder="Enter your email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <input
            className="w-96 mt-3 rounded border px-2 py-3"
            type="text"
            placeholder="Enter your role"
            value={userRole}
            onChange={(e) => {
              setUserRole(e.target.value);
            }}
          />
          <input
            className="w-96 mt-3 rounded border px-2 py-3"
            type="text"
            placeholder="Enter your description"
            value={userDescription}
            onChange={(e) => {
              setUserDescription(e.target.value);
            }}
          />
          <input
            className="w-96 mt-3 rounded border px-2 py-3"
            type="url"
            placeholder="Enter your image url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <button className="w-full mt-4 bg-emerald-700 py-3 text-white font-semibold active:scale-95">
            Create User
          </button>
        </form>
      </div>

      {/* Card */}
      <div className="flex gap-12 flex-wrap justify-center">
        {allUser.map((elem, idx) => {
          return (
            <Card
              elem={elem}
              handleSubmit={handleSubmit}
              key={idx}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
