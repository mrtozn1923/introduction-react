import React from 'react'

const Header=({title,description})=>{
    return(
        <div>
            <h1>{title}</h1>
            <div>{description}</div>
        </div>
    );
}

export default Header;

