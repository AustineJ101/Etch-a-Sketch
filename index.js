const gridContainer = document.querySelector("#grid-container");

const controlSec = document.querySelector("#controls");

const customizeBtn = document.querySelector("#customizeBtn");

const resetBtn = document.querySelector("#resetBtn");

const innerDimensions = 500;

let gridsPerSide = 16;

let totalGrids = gridsPerSide * gridsPerSide;


function createGrid(gridsPerSide){
  const gridSquare = document.createElement("div");
  let gridWidth = innerDimensions/gridsPerSide;
  let gridHeight = gridWidth;
  gridSquare.style.width = `${gridWidth}px`;
  gridSquare.style.height = `${gridHeight}px`;
  gridSquare.style.borderWidth = "1px";
  gridSquare.style.borderColor = "lightgrey";
  gridSquare.style.borderStyle = "solid";

  return gridSquare;

}

function setGridId(grid,id){
    grid.setAttribute("id", id);
    return grid;
}


function renderGrids(totalGrids){
  let renderedGrids  = 1;
  let gridId = 1;
  while(renderedGrids <= totalGrids){

    let gridSquare = createGrid(gridsPerSide);

    setGridId(gridSquare, gridId);

    gridId++;

    gridContainer.appendChild(gridSquare);
    renderedGrids++;
  }
  
}

renderGrids(totalGrids);


function clearGrids(){
  while(gridContainer.hasChildNodes()){
    gridContainer.removeChild(gridContainer.firstChild);
  }
 
}

function generateRandomColor(){
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}


function paintGridSquare(event){
  // This check ensures that only the grid squares are targeted
  if(!isNaN(event.target.id)){
    event.target.style.backgroundColor = generateRandomColor();
  }
  
}


gridContainer.addEventListener("mouseover", paintGridSquare);

// Checks for invalid user input;
function isInvalidInput(input){
  if(isNaN(input)){
    return true
  } else{
    let number = Number(input);
    if(!Number.isInteger(number) ||
        number < 0 ||
        number > 100  ){
      return true;
    }
  }
}


function createCustomGrids(){

  gridsPerSide = prompt(`Enter the no. of grids you wish you have per side.
  The maximum number is 100`);
  let invalid = isInvalidInput(gridsPerSide);

  while(invalid){
    gridsPerSide = prompt(`Enter a numerical value between 1 - 100`);
    invalid = isInvalidInput(gridsPerSide);
  }
    totalGrids = gridsPerSide * gridsPerSide;

    clearGrids();
    renderGrids(totalGrids);

}


function resetGrids(){
  gridsPerSide = 16;
  total = gridsPerSide * gridsPerSide;
  clearGrids();
  renderGrids(total);
}


customizeBtn.addEventListener("click", createCustomGrids);

resetBtn.addEventListener("click", resetGrids);
