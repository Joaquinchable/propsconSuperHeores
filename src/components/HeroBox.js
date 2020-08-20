import React from 'react';

const HeroBox = (props) => {
    return (
        <div className={props.className} >
           <h1>Hola soy : {props.name} y yo soy : {props.heroName}    </h1> 
           {props.children}
        </div>
    )
}

export default HeroBox;
