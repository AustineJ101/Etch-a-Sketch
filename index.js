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

function paintGridSquare(event){
  // This check ensures that only the bg-color of the grids change and not the entire grid container at once
  if(!isNaN(event.target.id)){
    event.target.classList.add("bg-color");
  }
  
}


gridContainer.addEventListener("mouseover", paintGridSquare);

function isValidInput(){
    gridsPerSide = prompt(`Enter the number of grids you wish to have per side?
    The maximum number is 100`);

    while(isNaN(gridsPerSide)){
      gridsPerSide = prompt("Enter a numerical value between 1 and 100")
    }
    while(gridsPerSide < 1 || gridsPerSide > 100){
      gridsPerSide = prompt("Enter a number between 1 and 100");
    }
    return gridsPerSide;
}


function createCustomGrids(){
    gridsPerSide = isValidInput();
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


function generateRandomColor(){
  red = Math.floor(Math.random() * 255) + 1;
  green = Math.floor(Math.random() * 255) + 1;
  blue = Math.floor(Math.random() * 255) + 1;

  return `rgb(${red}, ${green}, ${blue})`;
}






