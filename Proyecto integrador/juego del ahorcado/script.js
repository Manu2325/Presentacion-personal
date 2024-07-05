const words = ["JAVASCRIPT", "HTML", "CSS", "PROGRAMACION", "AHORCADO"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = [];
let wrongLetters = [];
const maxWrong = 6;

const wordContainer = document.getElementById('word-container');
const messageContainer = document.getElementById('message-container');
const wrongLettersContainer = document.getElementById('wrong-letters');
const keys = document.querySelectorAll('.key');
const restartBtn = document.getElementById('restart-btn');
const hangmanImg = document.getElementById('hangman-img');

function displayWord() {
    wordContainer.innerHTML = selectedWord
        .split('')
        .map(letter => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');
}

function updateWrongLetters() {
    wrongLettersContainer.innerHTML = `Letras incorrectas: ${wrongLetters.join(', ')}`;
    hangmanImg.src = `images/${wrongLetters.length}.png`;
}

function checkWin() {
    if (wordContainer.innerText.replace(/\s+/g, '') === selectedWord) {
        messageContainer.innerText = '¡Ganaste!';
        endGame();
    } else if (wrongLetters.length >= maxWrong) {
        messageContainer.innerText = `Perdiste. La palabra era: ${selectedWord}`;
        endGame();
    }
}

function endGame() {
    keys.forEach(key => key.disabled = true);
}

function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wrongLetters = [];
    messageContainer.innerText = '';
    keys.forEach(key => key.disabled = false);
    displayWord();
    updateWrongLetters();
}

keys.forEach(key => {
    key.addEventListener('click', () => {
        const letter = key.innerText;
        if (selectedWord.includes(letter)) {
            if (!guessedLetters.includes(letter)) {
                guessedLetters.push(letter);
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
            }
        }
        displayWord();
        updateWrongLetters();
        checkWin();
        key.disabled = true;
    });
});

restartBtn.addEventListener('click', resetGame);

displayWord();
updateWrongLetters();



