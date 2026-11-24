// 1. Seleccionamos TODAS las figuras de la galería (devuelve una lista)
let figuras = document.querySelectorAll("#galeria-mario figure");
console.log(figuras.length); // debe salir 6
// 2. Un array con 6 colores (uno por figura)
let colores = ["red", "orange", "gold", "mediumseagreen", "dodgerblue", "orchid", "lightpink"];
console.log(colores);
//  4. Recorremos las figuras: "indice" vale 0, 1, 2...
figuras.forEach((figura, indice) => {
    figura.style.backgroundColor = colores[indice];

    // figura.classList.add("foto-mario");

    // querySelector también se puede usar sobre UN elemento:
    // busca solo dentro de esa figura
    figura.querySelector("figcaption").textContent = colores[indice];
    figura.querySelector("figcaption").style.color = "darkblue";
});

let output = document.querySelector("#info");

output.textContent = figuras.length;
// console.log(output);
// console.log(output.textContent);
output.textContent = "Mario es el mejor";
// console.log(output.textContent);

figuras[3].classList.add("foto-mario");
let mario = document.querySelector("#mario");
// console.log(mario);

// EJERCICIOS
// a) Cambia un color del array y recarga la página.
// b) ¿Qué pasa si el array tiene solo 4 colores? (mira la consola y la pantalla)
// c) Haz que #info diga cuántas figuras hay en la galería.
// d) ¿Por qué no hemos usado document.querySelector("figure")?
//    (Pista: ¿cuántas figuras hay en toda la página?)

// Crear otro item a la lista del article galeria-mario tendra tambien un figure y figcaption

// crear una variable y utilizar createElement.

let listaGaleria = document.querySelector("#galeria-mario ul.galeria");
// console.log(listaGaleria);

let li = document.createElement("li");
listaGaleria.appendChild(li);

let figure = document.createElement("figure");
li.appendChild(figure);

let figcaption = document.createElement("figcaption");
figure.appendChild(figcaption);

figuras = document.querySelectorAll("#galeria-mario figure");
console.log(figuras.length);

figuras[figuras.length - 1].classList.add("img-before");
figuras[figuras.length - 1].querySelector("figcaption").textContent = colores[figuras.length - 1];
figuras[figuras.length - 1].style.backgroundColor = colores[figuras.length - 1];
