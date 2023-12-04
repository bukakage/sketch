var currentSqrNum = 4;
const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

function setCurrentColor() {
            // Get the selected color 
            const pickedColor = document.getElementById("colorPicker").value;
            currentColor = pickedColor;
            console.log(currentColor); 
            console.log(colorPicker);
  }

document.addEventListener("DOMContentLoaded", function() {
    // Create a grid container
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container4");

    // Create 16x16 grid items and append them to the container
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);

            const colorPicker = document.getElementById("colorPicker");
            selectedColor = colorPicker.value;

                        // Add click event listener to toggle 'clicked' class
                        gridItem.addEventListener("click", function () {
                            // gridItem.classList.toggle("clicked");
                            gridItem.style.backgroundColor = currentColor;
                        });

                        // // Add mousedown event listener to track mouse down
                        gridItem.addEventListener("mousedown", function () {
                            isMouseDown = true;
                            gridItem.style.backgroundColor = currentColor;
                        });

                        // Add mouseover event listener to change color when dragged
                                       
                        gridItem.addEventListener("mouseover", function () {
                            if (isMouseDown) {
                                gridItem.style.backgroundColor = currentColor;
                            }
                        });

                        // Add mouseup event listener to track mouse up
                        document.addEventListener("mouseup", function () {
                            isMouseDown = false;
                        });

        }
    }

    // Append the grid container to the body
    document.body.appendChild(gridContainer);
});

function clearButton(){
    const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(function (gridItem) {
            gridItem.style.backgroundColor = "#ddd";
            gridItem.classList.remove("clicked"); // Also remove the 'clicked' class
        });

}
document.getElementById("changeSqrBtn").addEventListener("click", changeSqrBtn);

function changeSqrBtn() {

    const squareNumberInput = document.getElementById("SquareNumber");
    const squareNumber = parseInt(squareNumberInput.value);
    // Validate the input
    if (isNaN(squareNumber) || squareNumber < 4 || squareNumber > 10) {
        alert("Please enter a valid number between 4 and 10.");
        return;
    }

    const gridContainer = document.createElement("div");
    gridContainer.classList.add(`grid-container${squareNumber}`);
    const sqrNum = squareNumber * squareNumber;

    // Clear the existing grid
    clearSqr();

    // Create 16x16 grid items and append them to the container
    for (let i = 0; i < sqrNum; i++) {
        for (let j = 0; j < sqrNum; j++) {

            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            // Add click event listener to toggle 'clicked' class
            gridItem.addEventListener("click", function () {
                // gridItem.classList.toggle("clicked");
                gridItem.style.backgroundColor = currentColor;
            });

            // Add mousedown event listener to track mouse down
            gridItem.addEventListener("mousedown", function () {
                isMouseDown = true;
                gridItem.style.backgroundColor = currentColor;
            });

            // Add mouseover event listener to change color when dragged
            gridItem.addEventListener("mouseover", function () {
                if (isMouseDown) {
                    gridItem.style.backgroundColor = currentColor;
                }
            });

            // Add mouseup event listener to track mouse up
            document.addEventListener("mouseup", function () {
                isMouseDown = false;
            });

            gridContainer.appendChild(gridItem);
        }
    }
    currentSqrNum = squareNumber;
    document.body.appendChild(gridContainer); // Append the grid container to the body or another appropriate parent element
}

function clearSqr() {
    //If someone seeing this help me this commented code doesn't work somehow anyone knows trick feel free flex
    //on me 
    //const gridContainer = document.querySelector(`.grid-container${currentSqrNum}`);
    var gridContainer;

   console.log(currentSqrNum);

    if (currentSqrNum == 4) {
         gridContainer = document.querySelector(`.grid-container4`);
         gridContainer.remove(`grid-container${currentSqrNum}`);
    } else if (currentSqrNum == 5) {
         gridContainer = document.querySelector(`.grid-container5`);
         gridContainer.remove(`grid-container${currentSqrNum}`);
    } else if (currentSqrNum == 6) {
         gridContainer = document.querySelector(`.grid-container6`);
         gridContainer.remove(`grid-container${currentSqrNum}`);
    } else if (currentSqrNum == 7) {
         gridContainer = document.querySelector(`.grid-container7`);
         gridContainer.remove(`grid-container${currentSqrNum}`);        
    } else if (currentSqrNum == 8) {
         gridContainer = document.querySelector(`.grid-container8`);
         gridContainer.remove(`grid-container${currentSqrNum}`);
    } else if (currentSqrNum == 9) {
         gridContainer = document.querySelector(`.grid-container9`);
         gridContainer.remove(`grid-container${currentSqrNum}`);
    } else if (currentSqrNum == 10) {
         gridContainer = document.querySelector(`.grid-container10`);
         gridContainer.remove(`grid-container${currentSqrNum}`);
    }
}

function clearContent() {
    // Select all elements with the class name
    const gridContainers = document.querySelectorAll(`.grid-container${currentSqrNum}`);
    
    // Iterate through each element and remove the class
    gridContainers.forEach(gridContainer => {
        gridContainer.classList.remove(`grid-container${currentSqrNum}`);
    });
}


function saveAsPNG() {
    const gridContainer = document.querySelector(".grid-container4");

    // Check if gridContainer is present
    if (!gridContainer) {
        console.error("Grid container not found.");
        return;
    }

    // Use html2canvas to capture the content of the grid-container
    html2canvas(gridContainer).then(canvas => {
        // Trigger the download of the canvas as PNG
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "sketch.png";
        link.click();
    });
}