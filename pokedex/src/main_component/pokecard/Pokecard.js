
import React from 'react'
import './Pokecard.css';

function getCard(props){
    const {id, name, type, base_experience} = props.data
    const imgLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
    
    return(
        <div class="pokecard">
            <h2 class="pokecard-title">{name}</h2>
            <img class="pokecard-image" src= {imgLink}/>
            <h3 class="pokecard-type">type: {type}</h3>
            <h3 class="pokecard-exp">EXP: {base_experience}</h3>
        </div>
    );
}


export default getCard;