
var playerTotalScore = 0;
var computerTotalScore = 0;

// game-button
function throwdice() { 
    // Score
    const playerScore = document.getElementById('score-Player');
    const computerScore = document.getElementById('score-Computer');

// generate a random number from 1 to 6
const firstRandomNum = Math.floor(Math.random() * 6) + 1

// images/dice1.png upto images/dice6.png
const firstDiceImage = 'assets/images/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage)


// generate a random number from 1 to 6
const secondRandomNum = Math.floor(Math.random() * 6) + 1

// images/dice1.png upto images/dice6.png
const secondDiceImage = 'assets/images/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage)

// find out who won the roll using firstRandomNum and secondRandomNum
if (firstRandomNum > secondRandomNum) {
    // if firstRandomNum won then increment the gamer score
    playerTotalScore ++;
    playerScore.innerText = playerTotalScore.toString();
  }
  if (secondRandomNum > firstRandomNum) {
    // if secondRandomNum won then increment the machine score
    computerTotalScore ++;
    computerScore.innerText = computerTotalScore.toString();
  }


// LOgic for winner
if (firstRandomNum > secondRandomNum){
    document.querySelector ('h1').innerHTML = 'Player Wins!';
    } else if (firstRandomNum < secondRandomNum) {
        document.querySelector ('h1').innerHTML = 'Player Lose!';  
    } else {
        document.querySelector ('h1').innerHTML = "It's a Draw!";
    }    
}
