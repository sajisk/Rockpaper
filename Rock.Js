// Rock, Paper and Scissors - Game 

//display game entry message
let playGame = confirm("Shall we play rock, paper or scissors game");
// if player clicks ok
if (playGame) {
//prompt the player for entering choice 
  let playerChoice=prompt("Please enter rock,paper or scissors");
//if player decide to enter choice 
  if (playerChoice) {
//trim whitspace and convert character to lower case
    let playerturn=playerChoice.trim().toLowerCase();
// if player enter either rock, paper or scissors 
    if (playerturn==='rock' || playerturn==='paper' || playerturn ==="scissors"){

//generate random number between 1 and 3
        let computerChoice=Math.floor(Math.random()*3+1);
//random number is assigned the value say 1 for rock and 2 for paper and so on 
        let computer = computerChoice ===1 ? 'rock' : computerChoice ===2 ? 'paper' : 'scissors';
// since computer now make random choice and player can enter value in prompt, its time to compare both thier game to come up with winner, condition tested for all computer wins and if none satisfied then player wins 
        let result = 
          playerturn === computer ? 'its a tie' 
        : playerturn ==='rock' && computer ==='paper' ? 'computer wins' 
        : playerturn ==='paper' && computer ==='scissors' ? 'computer wins' 
        : playerturn ==='scissors' && computer ==='rock' ? 'computer wins' 
        : 'player wins'; 
        alert (result);
// play another round or exit
        let playAnotherRound = confirm('Play another round');
        if (playAnotherRound){
            playAnotherRound ? location.reload() : alert('Ok Good luck');
        }
        else{
            alert('see you soon, bye');
        }
    }   
// if player enter any other words other than rock paper and scissors  
    else {
        alert("you have not entered the correct choice");
    }
  }
//if player decide not to enter choice and cancel 
  else {
      alert("Are your sure? May be next time");
  }
}
// if player clicks cancel
else {
    alert("May be next time.");
}