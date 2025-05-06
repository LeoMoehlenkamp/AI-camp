const animals = ["cat", "dog", "hamster"];
const list = document.getElementById("animal-list");

animals.forEach((animal) => {
  const li = document.createElement("li");
  li.innerText = animal;
  list.appendChild(li);
});