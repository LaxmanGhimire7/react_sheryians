import { useEffect, useState } from "react"

const App = () => {

  const [counter, setCounter] = useState(0)

  useEffect(()=>{
  console.log("hii")
  },[])
  return (
    <div className="p-4">
      <h1 className="text-3xl">{counter}</h1>
      <button className="" onClick={()=>{
        setCounter(counter+1)
      }}>Increase</button>
    </div>
  )
}

export default App
