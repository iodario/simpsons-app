import React from 'react'

const Card = ({name,image,quote}) => {

  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} alt={`personaje ${{name}}`} />
      <p>{quote}</p>
    </div>
    
  )
}

export default Card;