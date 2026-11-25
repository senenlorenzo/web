"use strict";
// ELEMENTOS HTML

let botonesControlesIDs = ["#btn-seleccionar-mario", "#btn-estrella-luigi", "#btn-girar-yoshi", "#btn-enemigo-bowser", "#btn-gigante-wario", "#btn-transparente-shyguy", "#btn-pixelado-goomba", "#btn-espejo-waluigi", "#btn-quitar-enemigo", "#btn-comprobar-estrella"];

let botonesControles = document.querySelectorAll("#personajes-css ul.lista-controles li button");

console.log("-----------------------");
console.log(botonesControles);

let classesToggle = ["seleccionado", "estrella", "girando", "enemigo", "gigante", "transparente", "pixelado", "espejo"];
console.log("-----------------------");
console.log(classesToggle);

let figurasGaleria = document.querySelectorAll("#personajes-css ul.lista-personajes li figure");
console.log("-----------------------");
console.log(figurasGaleria);

const outputSalida = document.querySelector("#resultado-clases");

/*
const botonControlMario = document.querySelector("#btn-seleccionar-mario");
const marioGaleria = document.querySelector("#mario-galeria");
const botonControlLuigi = document.querySelector("#btn-estrella-luigi");
const luigiGaleria = document.querySelector("#luigi-galeria");
const botonControlYoshi = document.querySelector("#btn-girar-yoshi");
const yoshiGaleria = document.querySelector("#yoshi-galeria");
const botonControlBowser = document.querySelector("#btn-enemigo-bowser");
const bowserGaleria = document.querySelector("#bowser-galeria");
const botonControlWario = document.querySelector("#btn-gigante-wario");
const warioGaleria = document.querySelector("#wario-galeria");
const botonControlShyGuy = document.querySelector("#btn-transparente-shyguy");
const shyGuyGaleria = document.querySelector("#shyguy-galeria");
const botonControlGoomba = document.querySelector("#btn-pixelado-goomba");
const goombaGaleria = document.querySelector("#goomba-galeria");
const botonControlWaluigi = document.querySelector("#btn-espejo-waluigi");
const waluigiGaleria = document.querySelector("#waluigi-galeria");
*/

// --FUNCIONES--
// function seleccionarMario() {
//     marioGaleria.classList.add("seleccionado");

//     outputSalida.textContent = "Mario ha sido seleccionado!";
// }
// function seleccionarLuigi() {
//     luigiGaleria.classList.add("estrella");
//     outputSalida.textContent = "Luigi ha sido seleccionado!";
// }
// function seleccionarYoshi() {
//     yoshiGaleria.classList.add("girando");
//     outputSalida.textContent = "Yoshi ha sido seleccionado!";
// }
// function seleccionarBowser() {
//     bowserGaleria.classList.add("enemigo");
//     outputSalida.textContent = "Bowser ha sido seleccionado!";
// }

function seleccionarPersonaje(personaje, clase, slogan, output = outputSalida) {
    const nombre = personaje.textContent;
    let message = "";
    // personaje.classList.add(clase);
    personaje.classList.toggle(clase);

    if (personaje.classList.contains(clase)) {
        message = `${nombre} ${slogan}`;
    } else {
        message = `${nombre} ya no ${slogan}`;
    }
    output.textContent = message;
}

// --EVENTOS--
// botonControlMario.addEventListener("click", () => seleccionarPersonaje(marioGaleria, "seleccionado", "ha sido seleccionado"));
// botonControlLuigi.addEventListener("click", () => seleccionarPersonaje(luigiGaleria, "estrella", "ha sido seleccionado"));
// botonControlYoshi.addEventListener("click", () => seleccionarPersonaje(yoshiGaleria, "girando", "ha sido seleccionado"));
// botonControlBowser.addEventListener("click", () => seleccionarPersonaje(bowserGaleria, "enemigo", "ha sido seleccionado"));
// botonControlWario.addEventListener("click", () => seleccionarPersonaje(warioGaleria, "gigante", "ha sido seleccionado"));
// botonControlShyGuy.addEventListener("click", () => seleccionarPersonaje(shyGuyGaleria, "transparente", "ha sido seleccionado"));
// botonControlGoomba.addEventListener("click", () => seleccionarPersonaje(goombaGaleria, "pixelado", "ha sido seleccionado"));
// botonControlWaluigi.addEventListener("click", () => seleccionarPersonaje(waluigiGaleria, "espejo", "ha sido seleccionado"));

figurasGaleria.forEach(function (figura, indice) {
    botonesControles[indice].addEventListener("click", () => seleccionarPersonaje(figura, classesToggle[indice], "se ha agregado la clase"));
});

// botonControlMario.addEventListener("click", seleccionarMario);
// botonControlLuigi.addEventListener("click", seleccionarLuigi);
// botonControlYoshi.addEventListener("click", seleccionarYoshi);
// botonControlBowser.addEventListener("click", seleccionarBowser);
