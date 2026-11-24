"use strict";

let figuras = document.querySelectorAll("#galeria-mario figure");
console.log("!-------------");
console.log("Array de figuras de Mario Bros");
console.log(figuras);

let imaxesMarioBros = ["../assets/img/marioBros/mario.webp", "../marioBros/luigi.webp", "../marioBros/shyguy.webp", "../marioBros/waluigi.webp", "../assets/marioBros/bowser.webp", "../assets/marioBros/yoshi.webp"];

figuras.forEach(function (figura, indice) {
    figura.style.backgroundImage = `url("${imaxesMarioBros[indice]}")`;
});
