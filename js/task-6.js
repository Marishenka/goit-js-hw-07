function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.querySelector("input");
const createBtn = controlsEl.querySelector("[data-create]");
const destroyBtn = controlsEl.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.textContent = i + 1;
    boxes.push(box);
    size += 10;
  }

  boxesEl.innerHTML = "";
  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(inputEl.value.trim(), 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  inputEl.value = "";
});
