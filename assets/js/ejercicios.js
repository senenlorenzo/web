function sumarDosNumeros(n1, n2) {
    let suma = n1 + n2;
    return suma;
}

function restarDosNumeros(n1, n2) {
    let resta = n1 - n2;
    return resta;
}

function multiplicarDosNumeros(n1, n2) {
    let multiplicacion = n1 * n2;
    return multiplicacion;
}

function dividirDosNumeros(n1, n2) {
    let division = n1 / n2;

    return division;
}

function seleccionarOperacion() {
    let operacion = parseInt(prompt("Seleccione la operacion que desea ejecutar [01: suma | 02: resta | 03: multiplicacion | 04: division]"));
    if (operacion === 1) {
        alert("Has seleccionado sumar");
        sumarDosNumeros();
    } else if (operacion === 2) {
        alert("Has seleccionado restar");
        restarDosNumeros();
    } else if (operacion === 3) {
        alert("Has seleccionado multiplicar");
        multiplicarDosNumeros();
    } else if (operacion === 4) {
        alert("Has seleccionado dividir");
        dividirDosNumeros();
    } else {
        alert("Por favor, seleccione una opcion valida [1, 2, 3, 4,]");
        seleccionarOperacion();
    }
}

function castigarBart() {
    let vueltas = prompt("Escribe el numero de vueltas");
    let frase = prompt("No volvere a acostarme tarde");
    let message = "";
    for (let i = 1; i <= vueltas; i++) {
        // Guardamos el texto a mostrar por Consola en una variable String
        message = i + ". ";
        // message = message + frase;
        message += frase;

        console.log(message);
    }
}

function castigarWhile() {
    let vueltas = prompt("Escribe el numero de vueltas");
    let frase = prompt("No volvere a acostarme tarde");
    let message = "";

    let i = 1;
    while (i <= vueltas) {
        message = i + ". ";
        message += frase;
        console.log(message);

        i++;
    }
}
function escribirConDoWhile() {
    let vueltas = prompt("Escribe el numero de vueltas");
    let frase = prompt("No volvere a acostarme tarde");
    let message = "";
    let i = 1;

    do {
        message = i + ". ";
        message += frase;
        console.log(message);
        i++;
    } while (i <= vueltas);
}

function multiplicarNumeros() {
    let numero = parseInt(prompt("inserte un numero"));
    let message = "";

    console.log("Tabla del " + numero);
    console.log("-------------");
    for (let i = 1; i <= 10; i++) {
        message = numero + " x " + i + " = " + numero * i;

        console.log(message);
    }
}
function contarPares() {
    let numero = parseInt(prompt("Inserte el numero final"));
    let message = "";
    console.log("Numeros pares del cero al " + numero);
    console.log("------------");
    for (let i = 0; i <= numero; i += 2) {
        message += i + ", ";
    }
    console.log(message);
}
function mostrarAprobado() {
    let numero = parseFloat(prompt("Inserte nota"));
    let corte = parseFloat(prompt("Introduce la nota de corte para aprobar"));
    if (numero >= corte) {
        console.log("Has aprobado");
    }
}
function pedirEdad() {
    let edadMinima = parseInt(prompt("Inserte edad minima"));
    let edad = parseInt(prompt("Inserte edad"));

    if (edad >= edadMinima) {
        console.log("Puede entrar");
    } else {
        console.log("No puede entrar");
    }
}
function clasificarNota() {
    let nota = parseFloat(prompt("Inserte nota"));
    if (nota >= 0 && nota < 5) {
        console.log("Suspenso");
    } else if (nota >= 5 && nota < 7) {
        console.log("Aprobado");
    } else if (nota >= 7 && nota < 9) {
        console.log("Notable");
    } else if (nota >= 9 && nota < 10) {
        console.log("Sobresaliente");
    } else if (nota === 10) {
        console.log("Matricula de honor");
    } else {
        console.log("No valido");
        clasificarNota();
    }
}
function clasificarNotaSwitch() {
    let nota = parseFloat(prompt("Inserte nota"));
    switch (true) {
        case nota >= 0 && nota < 5:
            console.log("Suspenso");
            break;
        case nota >= 5 && nota < 7:
            console.log("Aprobado");
            break;
        case nota >= 7 && nota < 9:
            console.log("Notable");
            break;
        case nota >= 9 && nota < 10:
            console.log("Sobresaliente");
            break;
        case nota === 10:
            console.log("Matricula de honor");
            break;
        default:
            console.log("No reconocido");
            clasificarNotaSwitch();
    }
}

function castigarBartSwitch() {
    let numero = 0;
    let castigo = "";
    let error = "";
    while (numero < 1 || numero > 4) {
        alert("Escribe un castigo del 1 al 4");
        numero = parseInt(prompt("Inserte numero castigo: \n" + "[1] - Limpiar la pizarra \n" + "[2] - Recoger el patio \n" + "[3] - Ordenar la biblioteca \n" + "[4] - Escribir 100 frases \n"));
    }
    switch (numero) {
        case 1:
            castigo = "Limpiar la pizarra";
            break;
        case 2:
            castigo = "Recoger el patio";
            break;
        case 3:
            castigo = "Ordenar la biblioteca";
            break;
        case 4:
            castigo = "Escribir 100 frases";
            break;
        default:
            error = "No deberias haber llegado aqui";
            console.log(error);
    }
    console.log(castigo);
}

function calcularNumeroAlCuadradoYCubo() {
    let n1 = parseFloat(prompt("Primer numero"));
    let cuadrado,
        cubo = 0;
    let message = "";
    cuadrado = n1 ** 2;
    cubo = n1 ** 3;
    message = "El cuadrado de " + n1 + " es: " + cuadrado;
    message = "\n";
    message = "El cubo de " + n1 + " es: " + cubo;
    alert(message);
    // console.log("El cuadrado de " + n1 + " es: " + cuadrado);
    // console.log("El cubo de " + n1 + " es: " + cubo);
}
function calcularPotenciaDeUnNumero() {
    let n1 = parseFloat(prompt("Primer numero"));
    let exponente = parseFloat(prompt("Exponente"));
    let resultado = 0;
    let message = "";
    resultado = n1 ** exponente;
    message = n1 + " elevado a potencia de " + exponente + " es " + resultado;
    alert(message);
}
function calcularMedia3Numeros() {
    let n1 = parseFloat(prompt("Primer numero"));
    let n2 = parseFloat(prompt("Primer numero"));
    let n3 = parseFloat(prompt("Primer numero"));
    let resultado = 0;
    resultado = (n1 + n2 + n3) / 3;
    console.log("La media aritmetica de " + n1 + "," + n2 + " y " + n3 + " es: " + resultado);
}
function calcularMedia3NumerosAvanzado() {
    let divisor = parseInt(prompt("Escribe el divisor"));
    let num = 0;
    let suma = 0;
    let resultado = 0;
    let message = "La media aritmetica de ";
    let contador = 1;
    while (contador <= divisor) {
        num = parseFloat(prompt("Introduzca el numero " + contador + " de la serie para hallar la media aritmetica"));
        if (contador < divisor) {
            message += num + " y ";
        } else {
            message += num;
        }
        suma += num;
        contador++;
    }
    resultado = suma / divisor;
    message += " es: " + resultado;
    alert(message);
}

function calcularParImpar() {
    let n1 = parseInt(prompt("Pon el numero entero"));
    if (n1 % 2 === 0) {
        alert("es par");
    } else {
        alert("impar");
    }
}

function contarFlexiones() {
    let n = parseInt(prompt("Dias del desafio"));
    let resultado = 0;
    let suma = 0;
    message = "";
    resultado = (n * (n + 1)) / 2;
    message = "El resultado del numero " + n + " es " + resultado + " \n ";
    for (let i = 0; i <= n; i++) {
        suma += i;
    }
    message += "El resultado del numero " + n + " es " + suma;
    alert(message);
}

function adivinarQueNumeroEstoyPensando() {
    const MI_NUMERO = 6;
    const LIMITE = 10;
    let numero1 = 0;
    let message = "";
    while (numero1 !== MI_NUMERO) {
        numero1 = parseInt(prompt("Escribe un numero"));
        if (numero1 < MI_NUMERO) {
            message = "El numero que estoy pensando es mayor";
        } else if (numero1 > MI_NUMERO) {
            message = "El numero que estoy pensando es menor";
        } else {
            message = "Acertaste el numero";
        }
        alert(message);
    }
}

function pedirNumeros() {
    let n1 = parseInt(prompt("Primer numero"));
    let n2 = parseInt(prompt("segundo numero"));
    let n3 = parseInt(prompt("Tercer numero"));
    let menor = n1;
    if (n2 < menor) {
        menor = n2;
    } else if (n3 < menor) {
        menor = n3;
    }
    console.log("El numero menor es: " + menor);
}
// sumarDosNumeros();
// restarDosNumeros();
// multiplicarDosNumeros();
// dividirDosNumeros();
// seleccionarOperacion();
// castigarBart();
// castigarWhile()
// escribirConDoWhile();
// multiplicarNumeros();
// contarPares();
// mostrarAprobado();
// pedirEdad();
// clasificarNota();
// clasificarNotaSwitch();
// castigarBartSwitch();
// calcularNumeroAlCuadradoYCubo();
// calcularPotenciaDeUnNumero();
// calcularMedia3Numeros();
// calcularMedia3NumerosAvanzado();
// contarFlexiones();
// calcularParImpar();
// adivinarQueNumeroEstoyPensando();

// pedirNumeros();

// let = sumarDosNumeros(5, 3);
// alert("la suma es " + suma);
function saludar() {
    alert("Hola mundo");
}
function saludarConParametro(nombre) {
    alert("Hola " + nombre);
}

// saludar();
// saludarConParametro("Senén");

function probarFunciones() {
    let n1 = parseFloat(prompt("Escribe el primer numero"));
    let n2 = parseFloat(prompt("Escribe el segundo numero"));
    let suma = sumarDosNumeros(n1, n2);
    let resta = restarDosNumeros(n1, n2);
    let multiplicacion = multiplicarDosNumeros(n1, n2);
    console.log("El resultado de " + n1 + " + " + n2 + " es " + suma);
    console.log("El resultado de " + n1 + " - " + n2 + " es " + resta);
    console.log("El resultado de " + n1 + " * " + n2 + " es " + multiplicacion);
    while (n2 === 0) {
        alert("El segundo numero no puede ser cero");
        n2 = parseFloat(prompt("Escribe el segundo numero"));
    }
    let division = dividirDosNumeros(n1, n2);
    console.log("El resultado de " + n1 + " / " + n2 + " es " + division);
}
// probarFunciones();

function mostrarCalculadora() {
    let opcion = 99;
    let resultado = 0;
    let n1 = 0;
    let n2 = 0;
    while (opcion < 0 || opcion > 4) {
        alert("Escribe un numero del 1 al 4");
        opcion = parseInt(prompt("Elige una opcion: \n" + "[0] - Salir \n" + "[1] - Sumar (+) \n" + "[2] - Restar (-) \n" + "[3] - Multiplicar (*) \n" + "[4] - Dividir (/) \n"));
        if (opcion < 0 || opcion > 4) {
            alert("Apanpao");
        }
    }
    if (opcion > 0) {
        n1 = parseFloat(prompt("Escribe el primer numero"));
        n2 = parseFloat(prompt("Escribe el segundo numero"));
    }
    switch (opcion) {
        case 1:
            resultado = sumarDosNumeros(n1, n2);
            message = "La suma de " + n1 + " + " + n2 + " es " + resultado;
            break;

        case 2:
            resultado = restarDosNumeros(n1, n2);
            message = "La resta de " + n1 + " - " + n2 + " es " + resultado;
            break;

        case 3:
            resultado = multiplicarDosNumeros(n1, n2);
            message = "El producto de " + n1 + " * " + n2 + " es " + resultado;
            break;

        case 4:
            while (n2 === 0) {
                alert("El segundo numero no puede ser cero");
                n2 = parseFloat(prompt("Escribe el segundo numero"));
            }
            resultado = dividirDosNumeros(n1, n2);
            message = "La division de " + n1 + " / " + n2 + " es " + resultado;
            break;
        default:
            message = "Gracias por jugar";
    }
    alert(message);
}
// mostrarCalculadora();
function mostrarCalculadora2() {
    let opcion = 99;
    let resultado = 0;
    let n1 = 0;
    let n2 = 0;
    let continuar = 0;
    while (opcion < 0 || opcion > 4) {
        alert("Escribe un numero del 1 al 4");
        opcion = parseInt(prompt("Elige una opcion: \n" + "[0] - Salir \n" + "[1] - Sumar (+) \n" + "[2] - Restar (-) \n" + "[3] - Multiplicar (*) \n" + "[4] - Dividir (/) \n"));
        if (opcion < 0 || opcion > 4) {
            alert("Apanpao");
        }
    }
    if (opcion > 0) {
        n1 = parseFloat(prompt("Escribe el primer numero"));
        n2 = parseFloat(prompt("Escribe el segundo numero"));
    }
    switch (opcion) {
        case 1:
            resultado = sumarDosNumeros(n1, n2);
            message = "La suma de " + n1 + " + " + n2 + " es " + resultado;
            break;

        case 2:
            resultado = restarDosNumeros(n1, n2);
            message = "La resta de " + n1 + " - " + n2 + " es " + resultado;
            break;

        case 3:
            resultado = multiplicarDosNumeros(n1, n2);
            message = "El producto de " + n1 + " * " + n2 + " es " + resultado;
            break;

        case 4:
            while (n2 === 0) {
                alert("El segundo numero no puede ser cero");
                n2 = parseFloat(prompt("Escribe el segundo numero"));
            }
            resultado = dividirDosNumeros(n1, n2);
            message = "La division de " + n1 + " / " + n2 + " es " + resultado;
            break;
        default:
            message = "Gracias por jugar";
    }
    alert(message);
    console.log("continuar antes de pedir = " + continuar);

    continuar = parseInt(prompt("Quieres realizar otra operacion ? Pulse 1 para continuar"));

    console.log("continuar despues de pedir = " + continuar);

    if (continuar === 1) {
        mostrarCalculadora2();
        console.log("Pepe dice continuar en el if = " + continuar);
    }
    console.log("continuar despues del if = " + continuar);
}
// mostrarCalculadora2();
