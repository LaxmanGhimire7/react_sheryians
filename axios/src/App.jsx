import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState(null);

  const getData = async () => {
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(response.data);
    setPokemon(response.data)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>

      {pokemon && (
        <>
        <audio controls src={pokemon.cries.legacy}></audio>
        {/* <h1>{pokemon.abilities.ability}</h1> */}

        {pokemon.abilities.map((elem)=>{
         console.log(elem.ability.url)
        })}
        </>
      )}

      {/* {pokemon && (
        <audio controls src={pokemon.cries.legacy}></audio>
        <h1>{pokemon.abilities}</h1>
      )} */}
      {/* {pokemon && (
       <h1>{pokemon}</h1>
      )} */}


    </div>
  );
};

export default App;
