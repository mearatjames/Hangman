//getElement
let _startGame = document.getElementById('startGame');
let _rightGuess = document.getElementById('rightGuess');
let _wrongGuess = document.getElementById('wrongGuess');
let _guessRemain = document.getElementById('guessRemain');
let _wins = document.getElementById('wins');
let _losses = document.getElementById('losses');
let _message = document.getElementById('instruction');
let _message2 = document.getElementById('message2');
let _image = document.getElementById('image');
let _imageSrc = _image.getAttribute('src');
let _reset = document.getElementById('reset');

//Game Variables
let secretWords = ['Santa Monica', 'Huntington', 'Newport', 'Laguna', 'Venice'];
let numGuess = 8;
let wins = 0;
let losses = 0;
let gameState = false;
let word = '';
let letterGuessed = [];
let wrongGuess = [];
let space = [];
let images = ['assets/img/Santa Monica.jpg', 'assets/img/Huntington.jpg', 'assets/img/Newport.jpg', 'assets/img/Laguna.jpg', 'assets/img/Venice.jpg']


//Game Function
function startGame() {
    gameState = true;
    numGuess = 8;
    letterGuessed = [];
    wrongGuess = [];
    space = [];
    _wins.textContent = wins;
    _losses.textContent = losses;
    _image.setAttribute('src', 'assets/img/newgame.jpg');
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
    if (gameState === true && letterGuessed.indexOf(letter) === -1 ) {
        letterGuessed.push(letter);
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
            _message.textContent = 'Press Start New Game To Start';
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
        _message2.textContent = "You Win!!!";
        image()
    }
    loss()
}

//Loss
function loss() {
    if (numGuess === 0) {
        losses++;
        gameState = false;
        _losses.textContent = losses;
        _message2.textContent = "You Lose..."
    }
}

//Change images if win
function image() {
    _image.setAttribute('src', images[secretWords.indexOf(word)])
}

//reset score
function reset () {
    wins = 0;
    _wins.textContent = wins;
    losses = 0;
    _losses.textContent = losses;
}

//Eventlistener
_startGame.addEventListener('click', startGame)
_reset.addEventListener('click', reset)


//key event
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
       guessLetter(event.key); 
    }
}
