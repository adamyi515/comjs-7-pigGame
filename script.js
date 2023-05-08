'use strict';

// Selecting Elements =======================================================================
const lblCurScore0EL = document.querySelector('#current--0');
const lblCurScore1EL = document.querySelector('#current--1');
const lblTotalScore0EL = document.querySelector('#score--0');
const lblTotalScore1EL = document.querySelector('#score--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const imgDice = document.querySelector('.dice');


init() // Initialize the game.

// Event Handler =============================================================================





// Functions =================================================================================

// Init function sets the default parameters of a new game.
function init(){
    // Hide the image of the dice at the start of the game.
    imgDice.classList.add('hidden');

    // Initialize the total score to 0.
    lblTotalScore0EL.textContent = 0;
    lblTotalScore1EL.textContent = 0;
}