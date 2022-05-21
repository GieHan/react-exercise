import { render } from '@testing-library/react';
import React, {Component} from 'react'

import GetCard from '../pokecard/Pokecard'
import './Pokedex.css'

class Pokedex extends Component {

    render(){
		let pokeList = [
			{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
			{id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
			{id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
			{id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
			{id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
			{id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
			{id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
			{id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
		];

        return (
			
			<div class="pokedex">

				<h1 class="pokedex-title">
        			<h1>Pokedex</h1>
      			</h1>

				<div class="pokedex-content">
					{pokeList.map(pl =>	<GetCard data={pl}/>)}
				</div>
			</div>
		);
    }

}



// Exporting classs , so it can import in another file
export default Pokedex;

// Example export functions
// export {render, sort, add}