import React from 'react'
import './Card.css';
import { Link, useParams } from 'react-router-dom'


const Card = ({name,image,quote}) => {

  

  return (
    <div className="card">
      <Link to= {`/character/${name}`}>
      <img src={image} alt={`personaje ${{name}}`} />
      <div className= "description-container">
      <h3>{name}</h3>
      <p>{quote}</p>
      </div>
      </Link>
    </div>
    
  )
}

export default Card;