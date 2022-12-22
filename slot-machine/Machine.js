const symbols       = ["☀️", "❄️", "💧"];
const symbolsNumber = 3;


function getRandomSymbols() {
    let resultSym   = [];
    let isWin       = true;
    for (let index = 0; index < symbolsNumber; index++) {

        /*  
        Because Math.floor round down the value and the random value will always < 3
        then we dont need -1
        */
        resultSym.push(symbols[Math.floor(Math.random() * symbols.length)]);

        if (index != 0 && isWin) {
            isWin = resultSym[index] === resultSym[index -1];
        }
    }

    return [resultSym, (isWin ? 'Win':'Loose')];
}

/*
Let this component just serve view logic instead a lot of business logic
*/

class Machine extends React.Component{
    render(){
        const result     = getRandomSymbols();
        return(
            <div>
                <p>{result[0]}</p>
                <p>{result[1]}</p>
            </div>
        )
    }
}