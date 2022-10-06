import './App.css'
import simpsonsApi from './APIrest/simpsonsApi'
import Card from './Card';


function App() {

  return (
    <div className="principal_container">
      {simpsonsApi.map((character, i) => (
        <Card
          name = {character.character}
          image = {character.image}
          quote = {character.quote}
          key = {i}

        />
      ))}
    </div>

  )
}


export default App
