import React, {Component} from "react";

import Pokedex from "../pokedex/Pokedex";



class Pokegame extends Component{

    getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
    
        //With + 1 , The maximum is inclusive and the minimum is also inclusive
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    generateRandomTeam(){
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

        /*
            - Split into two team (max/2).
            - Assign random member to each team, taken from list
        */
        if ((pokeList.length % 2) !== 0) {
            console.log("Team imbalance");
            return [];
            // process.exit();                  // Example to terminate process/app
        }
        
        let firstTeam     = [];
        let secondTeam    = [...pokeList];
        let middleIndex   = Math.ceil(pokeList.length / 2);
        
        while (firstTeam.length < middleIndex) {
            
            let currentRandomIndex = this.getRandomNumber(0, (secondTeam.length - 1))
        
            // Add value to first team
            firstTeam.push(secondTeam.at(currentRandomIndex))
        
            // remove value at index "currentRandomIndex" from second team
            secondTeam.splice(currentRandomIndex,1)
        
        }

        return {firstTeam, secondTeam};
    }

    render(){

        // var: global , let&cons : scoped
        let {firstTeam, secondTeam}     = this.generateRandomTeam();

        return (
        <div class="pokegame">
            <h1 class="pokegame-title">
                <h1>Pokedex Game</h1>
            </h1>

            <div class="pokegame-content">
                <Pokedex result="win" exp={100} data= {firstTeam}/>
                <Pokedex result="loose" exp={50} data= {secondTeam}/>
            </div>
        </div>
        )
        
    }
}


export default Pokegame;