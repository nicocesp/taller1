// Función para calcular el salario de empleados
function calcularSalario(empleados) {
    empleados.forEach(empleado => {
        let montoPorHora = (empleado.horasTrabajadas <= 10) ? 30000 : 33000;
        let salario = empleado.horasTrabajadas * montoPorHora;
        console.log(`Señor/a ${empleado.nombre}, el número de horas trabajadas es ${empleado.horasTrabajadas} y su salario es de $${salario}`);
    });
}

const empleados = [
    { nombre: "Juan", horasTrabajadas: 8 },
    { nombre: "Pedro", horasTrabajadas: 12 },
    { nombre: "Ana", horasTrabajadas: 15 },
    { nombre: "Luis", horasTrabajadas: 18 },
    { nombre: "Maria", horasTrabajadas: 20 }
];

calcularSalario(empleados);
console.log("-------------------------------------------------------------");

// Función para lanzar un dado hasta obtener un número par
function lanzarDado() {
    let dado;
    do {
        dado = Math.floor(Math.random() * 6) + 1;
        console.log(`El dado cayó en ${dado}, ${dado % 2 === 0 ? "es un número PAR" : "es un número IMPAR, tirando de nuevo..."}`);
    } while (dado % 2 !== 0);
}

lanzarDado();

console.log("-------------------------------------------------------------");
// funcion para calcular el costo de la lavadora
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerTipoLavadora(callback) {
    rl.question("Ingrese el tipo de lavadora (1 para Grande, 2 para Pequeña): ", function(tipo) {
        tipo = parseInt(tipo, 10);
        if (tipo !== 1 && tipo !== 2) {
            console.log("Tipo de lavadora inválido. Intente nuevamente.");
            return obtenerTipoLavadora(callback);
        }
        callback(tipo);
    });
}

function obtenerCantidadLavadoras(callback) {
    rl.question("Ingrese la cantidad de lavadoras a alquilar: ", function(cant) {
        callback(parseInt(cant, 10));
    });
}

function obtenerHorasUso(callback) {
    rl.question("Ingrese la cantidad de horas de uso: ", function(hr) {
        callback(parseInt(hr, 10));
    });
}

function calcularCosto(tipoLavadora, cantidad, horas) {
    let costoPorHora = (tipoLavadora === 1) ? 4000 : 3000;
    let costoTotal = cantidad * horas * costoPorHora;
    if (cantidad > 3) {
        costoTotal *= 0.97; // Aplicar descuento del 3%
    }
    return costoTotal;
}

function mostrarResumen(tipoLavadora, cantidad, horas, costoTotal) {
    console.log(`Tipo de lavadora: ${tipoLavadora === 1 ? "Grande" : "Pequeña"}`);
    console.log(`Cantidad alquilada: ${cantidad}`);
    console.log(`Horas de uso: ${horas}`);
    console.log(`Costo total a pagar: $${costoTotal.toFixed(2)}`);
    rl.close();
}

obtenerTipoLavadora(tipoLavadora => {
    obtenerCantidadLavadoras(cantidad => {
        obtenerHorasUso(horas => {
            const costoTotal = calcularCosto(tipoLavadora, cantidad, horas);
            mostrarResumen(tipoLavadora, cantidad, horas, costoTotal);
        });
    });
});

console.log("-------------------------------------------------------------");
// Funcion para calcular nota 
/*
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const materias = ["Física", "Química", "Biología", "Matemáticas", "Informática"];
let sumaCalificaciones = 0;
let i = 0;

function pedirCalificacion() {
    if (i < materias.length) {
        rl.question(`Ingrese la calificación de ${materias[i]} (0-10): `, function(calificacion) {
            calificacion = parseFloat(calificacion);

            if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
                console.log("Por favor, ingrese un número válido entre 0 y 10.");
                pedirCalificacion(); // Volver a pedir la calificación si es inválida
            } else {
                sumaCalificaciones += calificacion;
                i++;
                pedirCalificacion(); // Pedir la siguiente calificación
            }
        });
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    let porcentajeFinal = (sumaCalificaciones / (materias.length * 10)) * 100;

    let calificacionCualitativa;
    if (porcentajeFinal < 60) {
        calificacionCualitativa = "Mala";
    } else if (porcentajeFinal <= 80) {
        calificacionCualitativa = "Buena";
    } else {
        calificacionCualitativa = "Excelente";
    }

    console.log(`Tu porcentaje es ${porcentajeFinal.toFixed(2)}% y tu calificación es ${calificacionCualitativa}.`);
    rl.close();
}

pedirCalificacion(); // Iniciar el proceso
*/

console.log("---------------------------------------------------------");
/*
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];
let contador = 0;

function pedirNumero() {
    if (contador < 3) {
        rl.question(`Ingrese el número ${contador + 1}: `, function(num) {
            let numero = parseFloat(num);

            if (!isNaN(numero)) {
                numeros.push(numero);
                contador++;
                pedirNumero(); // Pedir el siguiente número
            } else {
                console.log("Ingrese un número válido.");
                pedirNumero(); // Repetir la solicitud si es inválido
            }
        });
    } else {
        mostrarMayor();
    }
}

function mostrarMayor() {
    let mayor = Math.max(...numeros);
    console.log(`El número mayor es: ${mayor}`);
    rl.close();
}

pedirNumero(); // Iniciar la solicitud de números


*/
console.log("---------------------------------------------------------");

// Función para calcular la ayuda económica según género y edad
function calcularAyudaEconomica(genero, edad) {
    let ayudaEconomica = 0;
    if (genero === "masculino") {
        ayudaEconomica = 40000;
    } else if (genero === "femenino") {
        if (edad < 50) {
            ayudaEconomica = 120000;
        } else if (edad >= 30 && edad <= 50) {
            ayudaEconomica = 100000;
        }
    }
    return ayudaEconomica;
}

const genero = "femenino";
const edad = 35;
console.log(`El valor de la ayuda mensual es: $${calcularAyudaEconomica(genero, edad)}`);
console.log("-------------------------------------------------------------------");

// Función para calcular el total a pagar en el gimnasio
function calcularPagoGimnasio(dias) {
    let tarifa;
    if (dias >= 90) tarifa = 955;
    else if (dias >= 30) tarifa = 1166;
    else if (dias >= 15) tarifa = 1200;
    else tarifa = 1500;
    return dias * tarifa;
}

const dias = 40;
console.log(`El total a pagar en el gimnasio por ${dias} días es: $${calcularPagoGimnasio(dias)}`);

console.log("----------------------------------------------------------------");
/*

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularTotal(fotocopias) {
    let precioPorCopia;

    if (fotocopias <= 499) {
        precioPorCopia = 120;
    } else if (fotocopias <= 749) {
        precioPorCopia = 100;
    } else if (fotocopias <= 999) {
        precioPorCopia = 80;
    } else {
        precioPorCopia = 50;
    }

    let totalPago = fotocopias * precioPorCopia;
    console.log(`El precio por copia es: $${precioPorCopia}`);
    console.log(`El total a pagar por ${fotocopias} copias es: $${totalPago}`);
}

function solicitarFotocopias() {
    rl.question("Ingrese la cantidad de fotocopias: ", function(input) {
        let fotocopias = parseInt(input, 10);

        if (isNaN(fotocopias) || fotocopias < 0) {
            console.log("Número de fotocopias no válido. Intente de nuevo.");
            return solicitarFotocopias(); // Volver a pedir el dato si es inválido
        }

        calcularTotal(fotocopias);
        rl.close();
    });
}

solicitarFotocopias();

*/
console.log("----------------------------------------------------------------");

// Función para determinar si un modelo de auto es defectuoso
function verificarModeloDefectuoso(modelo) {
    const modelosDefectuosos = [119, 179, 189, 195, 221, 780];
    return modelosDefectuosos.includes(modelo) ? "El automóvil está defectuoso, llevar a garantía." : "Su automóvil no está defectuoso.";
}

const modelo = 179;
console.log(verificarModeloDefectuoso(modelo));

console.log("--------------------------------------------------------------");
/*
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function diagnosticarProblema(emitePitido, discoGira) {
    if (emitePitido && discoGira) {
        console.log("Póngase en contacto con un técnico de apoyo.");
    } else if (emitePitido && !discoGira) {
        console.log("Verificar contactos de unidad.");
    } else {
        console.log("Traiga la computadora para repararla en la central.");
    }
}

function solicitarRespuestas() {
    rl.question("¿La computadora emite un pitido al iniciar? (si/no): ", function (respuesta1) {
        const emitePitido = respuesta1.toLowerCase() === "si";

        rl.question("¿El disco duro gira al iniciar? (si/no): ", function (respuesta2) {
            const discoGira = respuesta2.toLowerCase() === "si";

            diagnosticarProblema(emitePitido, discoGira);
            rl.close();
        });
    });
}

// Iniciar el proceso
solicitarRespuestas();
*/
console.log("--------------------------------------------------------------");

// Función para determinar si un modelo de auto es defectuoso
function verificarModeloDefectuoso(modelo) {
    const modelosDefectuosos = [119, 179, 189, 195, 221, 780];
    return modelosDefectuosos.includes(modelo) ? "El automóvil está defectuoso, llevar a garantía." : "Su automóvil no está defectuoso.";
}

function mostrarEstadoAutomovil(modelo) {
    console.log(verificarModeloDefectuoso(modelo));
}

mostrarEstadoAutomovil(179);
console.log("--------------------------------------------------------------");
/*
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const operadores = {
    "claro": { cargoFijo: 30000, valorMinuto: 100, paqueteDatos: 18000 },
    "movistar": { cargoFijo: 40000, valorMinuto: 250, paqueteDatos: 8000 },
    "tigo": { cargoFijo: 45000, valorMinuto: 200, paqueteDatos: 12000 }
};

function calcularTotal(operador, minutos) {
    let { cargoFijo, valorMinuto, paqueteDatos } = operadores[operador];
    let costoMinutos = minutos * valorMinuto;
    let totalPagar = cargoFijo + paqueteDatos + costoMinutos;

    console.log(`\nOperador: ${operador.charAt(0).toUpperCase() + operador.slice(1)}`);
    console.log(`Cargo Fijo: $${cargoFijo}`);
    console.log(`Paquete de datos: $${paqueteDatos}`);
    console.log(`Minutos internacionales (${minutos} min): $${costoMinutos}`);
    console.log(`Total a pagar: $${totalPagar}\n`);

    rl.close();
}

function solicitarDatos() {
    rl.question("Ingrese su operador (Claro, Movistar o Tigo): ", function (operador) {
        operador = operador.toLowerCase();

        if (!operadores[operador]) {
            console.log("Operador no válido. Intente nuevamente.\n");
            return solicitarDatos(); // Volver a solicitar el operador
        }

        rl.question("Ingrese la cantidad de minutos internacionales consumidos: ", function (minutos) {
            minutos = parseInt(minutos, 10);

            if (isNaN(minutos) || minutos < 0) {
                console.log("Cantidad de minutos no válida. Intente nuevamente.\n");
                return solicitarDatos(); // Volver a solicitar los datos
            }

            calcularTotal(operador, minutos);
        });
    });
}

// Iniciar la solicitud de datos
solicitarDatos();
*/


console.log("--------------------------------------------------------------");
/*
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precios = {
    pequeño: 6000,
    grande: 12000,
    ingredientes: {
        tocineta: 3000,
        jalapeño: 0,
        pavo: 3000,
        queso: 2500
    }
};

function calcularTotal(tamaño, ingredientesArray) {
    let total = precios[tamaño];
    let costoIngredientes = 0;

    ingredientesArray.forEach(ing => {
        if (precios.ingredientes[ing] !== undefined) {
            costoIngredientes += precios.ingredientes[ing];
        } else {
            console.log(`Ingrediente no válido: ${ing}`);
        }
    });

    total += costoIngredientes;

    console.log(`\nPrecio del sándwich ${tamaño}: $${precios[tamaño]}`);
    console.log(`Costo ingredientes adicionales: $${costoIngredientes}`);
    console.log(`Total a pagar por el sándwich: $${total}\n`);

    rl.close();
}

function solicitarDatos() {
    rl.question("Ingrese el tamaño del sándwich (pequeño/grande): ", function (tamaño) {
        tamaño = tamaño.toLowerCase();

        if (!["pequeño", "grande"].includes(tamaño)) {
            console.log("Tamaño no válido. Intente nuevamente.\n");
            return solicitarDatos(); // Volver a solicitar el tamaño
        }

        rl.question("¿Desea agregar ingredientes adicionales? (si/no): ", function (respuesta) {
            respuesta = respuesta.toLowerCase();

            if (respuesta === "si") {
                rl.question("Ingrese los ingredientes separados por coma (tocineta, jalapeño, pavo, queso): ", function (ingredientes) {
                    let ingredientesArray = ingredientes.split(",").map(i => i.trim().toLowerCase());
                    calcularTotal(tamaño, ingredientesArray);
                });
            } else {
                calcularTotal(tamaño, []);
            }
        });
    });
}

// Iniciar la solicitud de datos
solicitarDatos();
*/