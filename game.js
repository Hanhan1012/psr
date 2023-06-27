const hand=['scissors','rock', 'paper']
function getComputerChoice(){
const choice = hand[Math.floor(Math.random()*hand.length)];
return choice ;
}
console.log('hi')


function singleround(playerSelection,computerSelection){
   if(playerSelection == computerSelection){
    return 'tie';
   } 
    else if (
    (playerSelection =='rock' &&computerSelection =='scissors')
    || (playerSelection=='paper'&& computerSelection =='rock')
    || (playerSelection=='scissors'&& computerSelection =='paper')
   ){ 
    return 'player';
    }
    else {return 'computer'
    }
   }
   function playRound(playerSelection, computerSelection) {
    const result= singleround(playerSelection,computerSelection);
    if(result=='tie'){
        return 'it tie'
    }else if(result =="player"){
        return `You Win!${playerSelection}  beats ${computerSelection}`
    }else{
       return `You Lose!${computerSelection}  beats ${playerSelection}` 
    }
  }
  function playerchoice(){
    let Input = false;
    while(Input == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const x = choice.toLowerCase();
        if(hand.includes(x)){
            Input = true;
            return x;
        }
    }
}
   function game(){
    
    let scoreplayer=0;
    let scorecom=0;
    for(let i1=0;i1<5;i1++) {
        const playerSelection = playerchoice();
        const computerSelection = getComputerChoice();
         console.log(playRound(playerSelection, computerSelection));
        if(singleround(playerSelection,computerSelection)=='computer'){
            scorecom++
        }
        else if(singleround(playerSelection,computerSelection)=='player'){
            scoreplayer++
        }
        }
        console.log('game over')
        if(scoreplayer>scorecom){
            console.log('player is the winner')
    
        }else if(scoreplayer<scorecom){
            console.log('computer ís the winner')
        }else{
            console.log('tie')
        }
        
   }
   game()
