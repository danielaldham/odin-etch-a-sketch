let slider = document.querySelector('#myRange');
let output = document.querySelector("#size");
const grid = document.querySelector('.grid');

output.innerHTML = slider.value; // Display the default slider value

// Function to create a new grid
function createGrid(size) {
    grid.innerHTML = ''; // Clear the existing grid
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 1; i <= size * size; i++) { // Create size * size cells
      const cell = document.createElement('div');
      cell.classList.add('square');
      // Attach the event listener to each cell as it's created
      cell.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "black";
      });
      grid.appendChild(cell);
    }
  }

// Initial grid creation
createGrid(slider.value);

// Update the grid whenever the slider value changes
slider.oninput = function() {
  output.innerHTML = this.value; // Update the displayed value
  createGrid(this.value); // Create a new grid based on the slider's value
};

