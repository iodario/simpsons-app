import './Home.css'
import simpsonsApi from '../../APIrest/simpsonsApi'
import Card from '../../componets/Home/Card/Card';
import { useState } from 'react';



function Home() {

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
        {simpsonsApi
          .filter(element => element.character.toLowerCase().includes(filter.toLowerCase()))
          .map((character, i) => (
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


export default Home
