//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

let button = document.querySelector("button");
button.addEventListener("click", changeColor);

function changeColor() {

  let body = document.querySelector("body");
  let color;

    color = Math.floor((Math.random() * 6));
    body.style.backgroundColor = colors[color];
  

}
