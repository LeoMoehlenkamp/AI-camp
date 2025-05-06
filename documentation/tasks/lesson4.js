let count = 0;

const display = document.getElementById("count-display");
const button = document.getElementById("click-button");

button.addEventListener("click", () => {
  count++;
  display.innerText = `You clicked ${count} times.`;

  if (count >= 5) {
    button.style.color = "green";
    display.style.color = "green";
  }
});