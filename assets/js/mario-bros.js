"use strict";

// let figuras = document.querySelectorAll("#galeria-mario figure");
// console.log("!-------------");
// console.log("Array de figuras de Mario Bros");
// console.log(figuras);

// let imaxesMarioBros = ["../assets/img/marioBros/mario.webp", "../assets/img/marioBros/luigi.webp", "../assets/img/marioBros/shyguy.webp", "../assets/img/marioBros/waluigi.webp", "../assets/img/marioBros/bowser.webp", "../assets/img/marioBros/yoshi.webp"];

// figuras.forEach(function (figura, indice) {
//     figura.style.backgroundImage = `url("${imaxesMarioBros[indice]}")`;
// });
// ejercicio 1b
let ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");
ulGaleriaMario.classList.add("personajes");

// ejercicio 1c
let personajesGaleriaMario = ["Mario", "Luigi", "Shy Guy", "Waluigi", "Bowser", "Yoshi"];
let bgColorsGaleriaMario = ["IndianRed", "LightSalmon", "Red", "Thistle", "PaleTurquoise", "LightGreen"];

let figuras = document.querySelectorAll("#galeria-mario figure");
let captions = document.querySelectorAll("#galeria-mario figcaption");
console.log(captions);

console.log(figuras);

// ejercicio 2a
const info = document.querySelector("#info");

let itemsPaletaColores = document.querySelectorAll("#paleta-colores li");
let colorSeleccionado = null;
itemsPaletaColores.forEach(function (li) {
    li.style.backgroundColor = li.textContent;
});

function seleccionarColor() {
    colorSeleccionado = this.textContent;
    info.textContent = `Color seleccionado: ${colorSeleccionado}`;
}
function pintarFigura() {
    if (colorSeleccionado === null) {
        info.textContent = "Primero elige un color";
        return;
    }
    this.style.backgroundColor = colorSeleccionado;
    info.textContent = `${this.textContent} ahora es ${colorSeleccionado}`;
}
itemsPaletaColores.forEach(function (li) {
    li.onclick = seleccionarColor;
});
figuras.forEach(function (figura) {
    figura.onclick = pintarFigura;
});
// agregar 2 items de la listaGaleria
let li = document.createElement("li");
ulGaleriaMario.appendChild(li);
let figure = document.createElement("figure");
li.appendChild(figure);
let caption = document.createElement("figcaption");
figure.appendChild(caption);
figure.classList.add("img-before");
personajesGaleriaMario.push("goomba");
bgColorsGaleriaMario.push("blue");
caption.textContent = personajesGaleriaMario[personajesGaleriaMario.length - 1];

// figuras = document.querySelectorAll("#galeria-mario figure");
// captions = document.querySelectorAll("#galeria-mario figcaption");
figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
});

captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});
