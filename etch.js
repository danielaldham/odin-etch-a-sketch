const grid = document.querySelector('.grid');

for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('square');
        grid.appendChild(cell);
    }
}

// Select all grid cells
const cells = document.querySelectorAll('.square');

// Loop through each cell and attach the event listener
cells.forEach(cell => {
  cell.addEventListener("mouseenter", (event) => {
    // Highlight the mouseenter target
    event.target.style.backgroundColor = "black";

  });
});