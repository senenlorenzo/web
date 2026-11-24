function crearListaColores() {
    let colores = [];

    colores = ["rojo", "verde", "azul"];

    console.log("colores[0]: " + colores[0] + "\n" + "colores[1]: " + colores[1] + "\n" + "colores[2]: " + colores[2] + "\n");
    console.log(colores.length);
    colores[colores.length - 1];

    // Cambia verde por amarillo
    colores[1] = "amarillo";
    console.log(colores);
}
// crearListaColores();

function hacerListaCompra() {
    let lista = [];
    lista = ["leche", "pan", "huevos"];
    console.log("La lista de la compra es: " + lista);
    return lista;
}
// hacerListaCompra();

function accederElemento() {
    let comidas = ["Pizza", "Hamburguesa", "Paella"];
    console.log("Quiero comer: " + comidas[1]);
}
// accederElemento();
function contarMascotas() {
    let mascotas = [];
    mascotas = ["calcetines", "botas", "Kitty", "Rocky", "Mateo"];
    console.log("Tengo " + mascotas.length);
}
// contarMascotas();
function agregarProductoListaCompra() {
    let lista = hacerListaCompra();

    lista.push("Manzanas");
    console.log(lista);
}
// agregarProductoListaCompra();
function eliminarUltimaTarea() {
    let tareas = ["Estudiar", "Comprar pan", "Hacer testamento"];
    tareas.pop();
    console.log(tareas);
}
// eliminarUltimaTarea();
function mostrarSeriesTV() {
    let series = ["Dark", "Breaking Bad", "Stranger Things", "Los Soprano", "Juego de tronos"];
    let message = "Mis series favoritas son: ";
    for (let i = 0; i < series.length; i++) {
        if (i === series.length - 2) {
            message += series[i] + " y ";
        } else if (i === series.length - 1) {
            message += series[i];
        } else {
            message += series[i] + " , ";
        }
    }
    console.log(message);
}
// mostrarSeriesTV();
function buscarNombre() {
    let amigos = ["Carlos", "Lucía", "María"];
    let nombreABuscar = "María";
    let resultado = false;
    resultado = amigos.includes(nombreABuscar);
    console.log(nombreABuscar + " esta en la lista de amigos? " + resultado);
}
// buscarNombre();
function mostrarMenuDeUnDia() {
    let menus = ["Hamburguesa", "Pizza", "Raxo", "Pimientos rellenos", "Hallaca"];
    let menuDiaX = menus[2];
    console.log("Los miercoles hay " + menuDiaX);
}
// mostrarMenuDeUnDia();

function sumarGastos() {
    let gastos = [25, 40, 15, 20];
    let total = 0;
    for (i = 0; i < gastos.length; i++) {
        total += gastos[i];
        console.log("Parcial Gastos");
        console.log(total);
    }
    console.log("Total Gastos");
    console.log(total);
}
sumarGastos();
