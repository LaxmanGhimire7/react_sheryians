import React from 'react'

const Card = (props) => {
console.log(props)

  return (
    <div>
      <h1>{props.name}</h1>
      {props.details.map((elem,idx)=>{
         return (
            <div key={idx}>
                  <p>{elem}</p>
            </div>
         )
      })}



      
    </div>
  )
}

export default Card
