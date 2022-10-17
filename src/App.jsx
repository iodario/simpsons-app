import './App.css'
import simpsonsApi from './APIrest/simpsonsApi'
import Card from './Card';
import { useState } from 'react';
import './App.css';


function App() {

  //--guardamos los estados con el useState --
  //--onChange: cada vez que cambie ese input,
  // va a crear una f que toma el evento como parametro, y llama a setFilter --
  const [filter, setFilter] = useState("");



  return (
    <div className="principal_container">
      <h1>Characters</h1>
      <form action="" className="search">
        <label htmlFor="filter">Search:</label>
        <input id="filter" name="filter" type="text" value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </form>
      <div className="cards-container">
        {simpsonsApi.filter(
          element => element.character.includes(filter)).map((character, i) => (
            <Card
              name={character.character}
              image={character.image}
              quote={character.quote}
              key={i}
            />
          ))
        }
      </div>
    </div>

  )
}


export default App
