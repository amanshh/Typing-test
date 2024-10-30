window.addEventListener('load', init)

// Available Levels
const levels = {
    easy: 4,
    medium:3,
    hard: 2
    }

    // To change level
    const currentLevel = levels.easy;

// Globals
let time = 5;
let score = 0;
let isPlaying = 0;


// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'marathon', 'call', 'red', 'average', 'dark','diwali', 'joke', 'echo', 'siblings', 'girl', 'women', 'symptom',
    'javascript', 'unity', 'actually', 'suddenly', 'lucky', 'statue', 'runway', 'generate', 'love', 'honesty', 'loyal',
    'html', 'java', 'devops', 'mobile','cell', 'maths', 'reels', 'real', 'videos', 'project', 'webhooks', 'database',
    'laughter','space', 'definition', 'soldier', 'lie', 'fame', 'like', 'comment', 'share', 'review', 'known', 'cadet', 'boy', 'shirt', 'merit', 'in', 'off', 'oops', 
    'inn','sprint', 'horse', 'tiger', 'sprinter', 'cyclist', 'avengers', 'bullet', 'holy', 'pious', 'plentitude', 'huge', 'sound', 'listen','response', 'shout','hurrah'
];

// Initialize Game
function init(){
    // Show numbers of Seconds in UI
    seconds.innerHTML = currentLevel;
    // load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // check game status
    setInterval(checkStatus, 50)
}

// Start match
function startMatch(){
if(matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
}
// if score is -1, display 0
if(score === -1){
scoreDisplay.innerHTML = 0;
}else{
    scoreDisplay.innerHTML = score;
}
}


// Match currentWord to wordInput
function matchWords(){
        if(wordInput.value === currentWord.innerHTML){
            message.innerHTML = 'Correct!!!';
            return true;
        } else {
            message.innerHTML = '';
            return false;
        }
    }


// Pick & Show random array index
function showWord(words){
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown Timer
function countdown(){
    // Make sure time is not run out
    if(time > 0){
        // Decrement
        time--;
    } else if(time === 0){
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}
// Check game Status
function checkStatus(){
    if(isPlaying && time === 0){
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}