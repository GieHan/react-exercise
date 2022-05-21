import { render } from '@testing-library/react';
import React from 'react'

import GetCard from '../pokecard/Pokecard'

function getNum(){
	return Math.floor(Math.random() * 10) + 1;
}

class Pokedex extends React.Component {

    render(){
        return (
			<div>
				<GetCard id={2} />
			</div>
		);
    }

}



// Exporting classs , so it can import in another file
export default Pokedex;

// Example export functions
// export {render, sort, add}