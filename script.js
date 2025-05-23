const gridContainer = document.querySelector("#container");

const newGridBtn = document.querySelector("button");

const containerWidth = gridContainer.clientWidth;

let gridsPerRow = 16;

function populateGridContainer(gridsPerRow){
   
    const gridSquare = document.createElement("div");

    let gridDimention = containerWidth/gridsPerRow;

    gridSquare.style.width = `${gridDimention}px`;
    gridSquare.style.height = `${gridDimention}px`;
    gridSquare.style.border = "1px solid black";
    gridSquare.style.cursor = "pointer";
    gridSquare.classList.add("square");

    let totalGridSquares = gridsPerRow ** 2;

    for(let i = 1; i <= totalGridSquares; i++){
        let clone = gridSquare.cloneNode(true);
        gridContainer.appendChild(clone)
    }


}

populateGridContainer(gridsPerRow);


gridContainer.addEventListener("mouseover", (e) => {

    if(e.target.matches(".colored")){

        const currentColor = getComputedStyle(e.target).backgroundColor; //Get current color

        const rgbValues = currentColor.match(/\d+/g).map(Number); //Extract rgb values

        const darkenedRGB = rgbValues.map(value => Math.floor(value * 0.9)); //Newly darkened bg color

        e.target.style.backgroundColor = `rgb(${darkenedRGB.join(",")})`;

    } else if(e.target.matches(".square")){
       
        let randomColor = generateRandomColor();

        e.target.style.backgroundColor = randomColor;

        e.target.classList.add("colored");
        
    }
          
})

function generateRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}


newGridBtn.addEventListener("click", () => {
    gridContainer.innerHTML = "";

    gridsPerRow = prompt("Enter the number of grids per row (Do not exceed 100)", 16);

    let invalid = isInvalidInput(gridsPerRow);

    while(invalid){
        gridsPerRow = prompt("Please enter a numeric value between 1 - 100")
        invalid = isInvalidInput(gridsPerRow);
    }

    populateGridContainer(gridsPerRow);
});

function isInvalidInput(input){
  if(isNaN(input) || input == ""){
    return true
  } else{
    let number = Number(input);
    if(!Number.isInteger(number) ||
        number <= 0 ||
        number > 100  ){
      return true;
    }
  }
}