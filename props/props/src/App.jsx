import Card from './components/Card'
import Male from './components/Male'
import Female from './components/Female'
import { useState } from 'react'

const App = () => {
  const [male, setMale] = useState()
  return (
    <div>
      <Card  name="Lakxh"  details={['class', 'jdjd',"ihsus"]}/>
      <Male />
      <Female />
    </div>
  )
}

export default App
