import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [allTask, setAllTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    // setAllTask([...allTask, {task}])
    setAllTask((prev) => [...prev, { task }]);
  };

  const handleDelete = (idx) =>{
    const allData = [...allTask];
    allData.splice(idx,1)
    setAllTask(allData)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-200 to-violet-900 flex flex-col justify-center items-center">
      <div className="w-xl bg-white p-5 rounded -mt-72">
        <h1 className="text-center font-semibold text-lg capitalize font-serif">
          To-do List
        </h1>
        <form onSubmit={handleSubmit} className="flex justify-center gap-4 ">
          <input
            className="border py-2 px-4 w-72 rounded"
            type="text"
            placeholder="Enter your list"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button className="bg-emerald-700 py-2 px-4 text-white active:scale-95 rounded">
            Submit
          </button>
        </form>

        <div className=" pl-20 mt-5 space-y-4 w-full">
          {allTask.map((elem, idx) => {
            return (
              <div className="flex justify-between items-start gap-4 p-4" key={idx}>
                <span className="shrink items-start">0</span>
                <h1 className="max-w-[200px] wrap-break-word">{elem.task}</h1>
                <button onClick={()=>{
                  handleDelete(idx)
                }} className="bg-red-600 text-white flex ml-32">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
