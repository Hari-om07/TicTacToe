let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const messageElement = document.getElementById('message');

function makeMove(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;

        if (checkWin()) {
            messageElement.innerText = `${currentPlayer} Wins!`;
            gameActive = false;
            return;
        }

        if (checkDraw()) {
            messageElement.innerText = 'It\'s a Draw!';
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        messageElement.innerText = `${currentPlayer}'s turn`;
    }
}

function setFontSize(fontSize) {
    messageElement.style.fontSize = fontSize + 'px';
}

// Example usage:
setFontSize(24); // Set font size to 24 pixels

function checkWin() {
    for (let condition of winningConditions) {
        if (board[condition[0]] === currentPlayer &&
            board[condition[1]] === currentPlayer &&
            board[condition[2]] === currentPlayer) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !board.includes('');
}

function restartGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    messageElement.innerText = `${currentPlayer}'s turn`;

    // Clear the board
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}

