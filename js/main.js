const boardContainer = document.getElementById("container_board");
const selectDifficolta = document.getElementById("select_difficolta");
const buttonAvvioPartita = document.getElementById("button_start_game");

buttonAvvioPartita.addEventListener("click", function() {
    const level = selectDifficolta.value;

    const totalCells = getCellsNumber(level);

    generateGrid(totalCells);
})

function getCellsNumber(level) {
    let result;

    /* switch (parseInt(level)) {
        case 1:
            result = 100;
            break;
        case 2:
            result = 81;
            break;
        case 3:
            result = 49;
            break;
    } */

    if (parseInt(level) === 1) {
            result = 100;
    } else if (parseInt(level) === 2) {
        result = 81;
    } else if (parseInt(level) === 3) {
        result = 49;
    }

    return result;
}

/**
 * 
 * @param {number} cellsNumber 
 */
function generateGrid(cellsNumber) {
    boardContainer.innerHTML = "";

    const cellSize = 100 / Math.sqrt(cellsNumber);
    
    for (let i = 1; i <= cellsNumber; i++) {
        const cell = document.createElement("div");
        cell.classList.add("box", "d-flex", "justify-content-center", "align-items-center");
        cell.style.height = `${cellSize}%`;
        cell.style.width = `${cellSize}%`;
        cell.addEventListener("click", onSingleCellClick);
        
        const cellText = document.createElement("p");
        cellText.classList.add("m-0");
        cellText.textContent = i;

        cell.append(cellText);
        boardContainer.append(cell);
    }
}

/**
 * 
 */
function onSingleCellClick() {
    this.classList.toggle("clicked");
}