let button = document.querySelector("button");
let bodyElement = document.querySelector("body");
button.addEventListener("click", function () {
  let colors = ["blue", "yellow", "green", "brown", "grey", "black", "purple"];
  let lengthOfArray = colors.length;
  let randomIndex = Math.floor(Math.random() * lengthOfArray);
  bodyElement.style.backgroundColor = colors[randomIndex];
});
