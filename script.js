const container = document.querySelector(".container");
const button = document.querySelector(".box-number");
let boxNumberPerSide = 16;

function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size ** 2; i++) {
    const divBox = document.createElement("div");
    divBox.classList.add("box");

    divBox.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "#000000";
    });

    divBox.style.height = `calc(80vh / ${size})`;
    divBox.style.width = `calc(100vw / ${size})`;

    container.appendChild(divBox);
  }
}

button.addEventListener("click", () => {
  let userInput = prompt(
    "How many boxes per side do you want?",
    "must be lower than or equal to 100"
  );

  if (userInput !== null) {
    userInput = parseInt(userInput, 10);
    if (userInput <= 100 && userInput > 0) {
      boxNumberPerSide = userInput;
      createGrid(boxNumberPerSide);
    } else {
      alert("Please enter a valid positive number.");
    }
  }
});

// Initial grid setup
createGrid(boxNumberPerSide);
