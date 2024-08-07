let score = JSON.parse(localStorage.getItem('score')) || {
    Wins:0,
    loses:0,
    Tie:0
}


function playGame(playerPick){
    const systemMove = computerPick();

    let result = '';

    if(playerPick === 'Rock'){
        if(systemMove === 'Rock'){
            result = 'Tie';
        }
        else if(systemMove === 'Paper'){
            result = 'Loss';
        }
        else if(systemMove === 'Scissors'){
            result = 'Won';
        }
    }else if (playerPick === 'Paper'){
        if(systemMove === 'Rock'){
            result = 'Won';
        }
        else if(systemMove === 'Paper'){
            result = 'Tie';
        }
        else if(systemMove === 'Scissors'){
            result = 'Loss';
        }
    }else if(playerPick === 'Scissors'){
        if(systemMove === 'Rock'){
            result = 'Loss';
        }
        else if(systemMove === 'Paper'){
            result = 'Won';
        }
        else if(systemMove === 'Scissors'){
            result = 'Tie';
        }
    }
    if(result === 'Won'){
        score.Wins++;
    }else if(result === 'Loss'){
        score.loses++;
    }else if(result === 'Tie'){
        score.Tie++;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = `You ${result}`;
    document.querySelector('.js-moves').innerHTML = `You picked 
    <img src="${playerPick}-emoji.png">, Computer picked <img src="${systemMove}-emoji.png">`;

}
function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.loses}, Ties: ${score.Tie}`;
}



function computerPick(){
    const randomNumber = Math.floor(Math.random()*3);
    let computerMove = '';
    if(randomNumber === 0){
        computerMove = 'Rock';
    }
    else if(randomNumber === 1){
        computerMove = 'Paper';
    }
    else if(randomNumber === 2){
        computerMove = 'Scissors';
    }
    return computerMove;
}