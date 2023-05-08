'use strict';

// Data =====================================================================================
let currentScore = 0;
let activePlayer = 0;
const totalScores = [0, 0];

// Selecting Elements =======================================================================
const lblCurScore0EL = document.querySelector('#current--0');
const lblCurScore1EL = document.querySelector('#current--1');
const lblTotalScore0EL = document.querySelector('#score--0');
const lblTotalScore1EL = document.querySelector('#score--1');

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const imgDice = document.querySelector('.dice');


init() // Initialize the game.

// Event Handler =============================================================================
btnRoll.addEventListener('click', function(){
    // 1. Generate a number between 1-6.
    const number = rollDice();

    // 2. Display the dice.
    imgDice.classList.remove('hidden');
    imgDice.src = `dice-${number}.png`;

    // 3. Check if the number is 1: if true, switch to next player.
    // If number 2-6, add number to current score.
    if(number !== 1){
        currentScore += number;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        // Switch to next player b/c number == 1.
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;

        // Change CSS to indicate which player is active.
        player0EL.classList.toggle('player--active');
        player1EL.classList.toggle('player--active');
    }

});




// Functions =================================================================================

// Init function sets the default parameters of a new game.
function init(){
    // Hide the image of the dice at the start of the game.
    imgDice.classList.add('hidden');

    // Initialize the total score to 0.
    lblTotalScore0EL.textContent = 0;
    lblTotalScore1EL.textContent = 0;

}

// Generates number between 1-6
function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}