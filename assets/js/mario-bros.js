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

figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
});

captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});
