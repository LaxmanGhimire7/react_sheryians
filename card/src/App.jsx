import { useState } from 'react'
import Card from './components/Card.jsx'

const App = () => {
  const [count, setCount] = useState(10);

  const add = ()=>{
    setCount(count+1)
  }

  return (
    <div>
        {/* <Card /> */}

<h1>{count}</h1>
<button onClick={add}>+</button>
    </div>
  )
}

export default App
