import React from 'react';
import Card from './Card';


const CardList = ({ robots }) =>{
// To test throwing an error
//  if(true){
//     throw new Error('Ooooops!')
//  }
    return (
        <div>
            {
robots.map((user, i )=> {
    return  (
    <Card 
    key={i} 
    id={robots[i].id} 
    name={robots[i].name} 
    email={robots[i].email}
    alt={robots[i].username}
    />)
})
            }
        </div>
    )
}

export default CardList;