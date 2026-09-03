const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameRunning = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", cellClicked);
});

restartBtn.addEventListener("click", restartGame);

function cellClicked() {

    const index = this.dataset.index;

    if(board[index] !== "" || !gameRunning){
        return;
    }

    board[index] = currentPlayer;
    this.textContent = currentPlayer;

    checkWinner();
}

function checkWinner(){

    let winner = false;

    for(let pattern of winPatterns){

        const a = board[pattern[0]];
        const b = board[pattern[1]];
        const c = board[pattern[2]];

        if(a === "" || b === "" || c === ""){
            continue;
        }

        if(a === b && b === c){
            winner = true;
            break;
        }
    }

    if(winner){
        statusText.textContent = `Player ${currentPlayer} Wins!`;
        gameRunning = false;
        return;
    }

    if(!board.includes("")){
        statusText.textContent = "Game Draw!";
        gameRunning = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

function restartGame(){

    board = ["","","","","","","","",""];
    currentPlayer = "X";
    gameRunning = true;

    statusText.textContent = "Player X's Turn";

    cells.forEach(cell => {
        cell.textContent = "";
    });

}