const container = document.querySelector(".container");
const button = document.querySelector(".box-number");
let boxNumberPerSide = 16;

let isDraw = false;
document.addEventListener("mousedown", () => (isDraw = true));
document.addEventListener("mouseup", () => (isDraw = false));

function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size ** 2; i++) {
    const divBox = document.createElement("div");
    divBox.classList.add("box");

    divBox.addEventListener("mouseover", (e) => {
      if (isDraw) {
        e.target.style.backgroundColor = `hsl(${Math.round(
          Math.random() * 360
        )}, 69%, 47%)`;
      }
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

createGrid(boxNumberPerSide);
