//getElement

let _startGame = document.getElementById('startGame');
let _rightGuess = document.getElementById('rightGuess');
let _wrongGuess = document.getElementById('wrongGuess');
let _guessRemain = document.getElementById('guessRemain');
let _wins = document.getElementById('wins');
let _losses = document.getElementById('losses');
let _message = document.getElementById('instruction');


//Game Variables
let secretWords = ['Santa Monica', 'Huntington', 'Newport', 'Laguna', 'Venice', 'Manhattan'];
let numGuess = 10;
let wins = 0;
let losses = 0;
let gameState = false;
let word = '';
let letterGuessed = [];
let wrongGuess = [];
let space = [];


//Game Function

function startGame() {
    gameState = true;
    numGuess = 10;
    letterGuessed = [];
    wrongGuess = [];
    space = [];
    word = secretWords[Math.floor(Math.random()* secretWords.length)]
    console.log(word)
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ' '){
            space.push(' ');
        } else {
            space.push('_');
        }
    }

    _guessRemain.textContent = numGuess;
    _rightGuess.textContent = space.join('');
    _wrongGuess.textContent = wrongGuess;
    
}

//Guess Letter Functions
function guessLetter(letter) {
    console.log(letter);
    if (gameState === true && letterGuessed.indexOf(letter) === -1 ) {
        letterGuessed.push(letter);
        console.log(word)
        for (let i = 0; i < word.length; i++) {
            if(word[i].toLowerCase() === letter.toLowerCase()){
                space[i] = word[i]; 
            }
        }
        _rightGuess.textContent = space.join('');
        _message.textContent = "";
        checkLetter(letter);
    } else {
        if (!gameState) {
            _message.textContent = 'Press Start New Game To Start Over';
        } else {
            _message.textContent = "You've already guessed this letter!";
        }
    }
    
}

//Check Letter
function checkLetter(letter) {
    if (space.indexOf(letter.toLowerCase()) === -1 && space.indexOf(letter.toUpperCase()) === -1) {
       numGuess--;
       wrongGuess.push(letter);
       _wrongGuess.textContent = wrongGuess.join('');
       _guessRemain.textContent = numGuess;  
    }
    win()
}

//Win

function win() {
    if (word.toLowerCase() === space.join('').toLowerCase()) {
        wins++;
        gameState = false;
        _wins.textContent = wins;
    }
    loss()
}

//Loss

function loss() {
    if (numGuess === 0) {
        losses++;
        gameState = false;
        _losses.textContent = losses;
    }
}

//Eventlistener

_startGame.addEventListener('click', startGame)

//key event
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
       guessLetter(event.key); 
    }
}
//Picking random secret word from the array

//Displaying _ _ _ representing each letter in the secretword

// let lettersRemained = word.length
// const possibleKey = "abcdefghijklmnopqrstuvwxyz"

// var startGame = document.querySelector('.start')

// startGame.addEventListener('click', event)

// function event() {
//     startGame.style.display = 'none'
//     document.querySelector('.instruction').style.display = 'block'
//     document.querySelector(".answer").textContent = answerWord.join(" ")
// //Game Loop while the answer letters still left
// }
//     document.onkeyup = function(event) {
//         let guess = event.key;   
//         for (let i = 0; i<letterGuessed.length; i++){
//             if (guess !== letterGuessed[i]) {
//                 // letterGuessed.push(guess);
//                 console.log(letterGuessed)
//             }
//         }
  

//     // for (let i = 0; i < letterGuessed.length; i++) {
//     //     if (guess === letterGuessed[i]) {     
//     for (let i = 0; i < possibleKey.length; i++){
//         if (guess === possibleKey.charAt(i) && lettersRemained >0) {
//             for (let i = 0; i < word.length; i++){
//                 if (guess === word.charAt(i)) {
//                     answerWord[i] = guess;
//                     lettersRemained-- ;
//                     console.log(lettersRemained);
//                     document.querySelector(".answer").textContent = answerWord.join(" ")
//                         }
//                     }
//         } 
//     }
// }