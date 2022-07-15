import React from 'react'
import './Card.css'


const Card = ({name, email, username, id}) =>{
    return(
<div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
    <img src={`https://robohash.org/${id}?set=set3`} alt={`${username}`} />
    <div>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
</div>
    )
}




export default Card;