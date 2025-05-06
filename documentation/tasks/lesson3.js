const title = document.getElementById("main-title");
const button = document.getElementById("click-me");

button.addEventListener("click", () => {
  title.innerText = "Boom! The heading changed.";
  title.classList.add("highlighted");
});