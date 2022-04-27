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

