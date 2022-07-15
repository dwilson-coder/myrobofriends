import React from 'react'
import 'tachyons'



const SearchBox = ({searchfield, searchChange}) =>{
return (
    <div className='pa2'>
        <input type='search' 
        placeholder='Search robots' 
        className='pa3 ba b--blue bg--lightest-blue br3'
        onChange={searchChange}
        />
    </div>
)

}

export default SearchBox