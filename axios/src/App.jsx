import axios from "axios"

const App = () => {

  const getData = async() =>{
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response)
  }
  return (
    <div>
      <h1 onClick={getData}>Click me</h1>
    </div>
  )
}

export default App
