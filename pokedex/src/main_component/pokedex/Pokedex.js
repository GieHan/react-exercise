import { render } from '@testing-library/react';
import React, {Component} from 'react'

import GetCard from '../pokecard/Pokecard'
import './Pokedex.css'

class Pokedex extends Component {

    render(){
		const {result, exp, data} = this.props;
		const pokeList = data;
		
        return (
			<div class="pokedex">
				<h1 class="pokedex-result">{result}</h1>
				<h3 class="pokedex-exp">{exp}</h3>

				<div class="pokedex-content">
					{/* <GetCard data={data} /> */}
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