"use strict";
// ELEMENTOS HTML

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
*/

// --FUNCIONES--
// function seleccionarMario() {
//     marioGaleria.classList.add("seleccionado");

//     outputSalida.textContent = "Mario ha sido seleccionado!";
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

figurasGaleria.forEach(function (figura, indice) {
    botonesControles[indice].addEventListener("click", () => seleccionarPersonaje(figura, classesToggle[indice], "se ha agregado la clase"));
});

// botonControlMario.addEventListener("click", seleccionarMario);
// botonControlLuigi.addEventListener("click", seleccionarLuigi);
