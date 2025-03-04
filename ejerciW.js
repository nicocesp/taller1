const empleados = [
    { nombre: "Juan", horasTrabajadas: 8 },
    { nombre: "Pedro", horasTrabajadas: 12 },
    { nombre: "Ana", horasTrabajadas: 15 },
    { nombre: "Luis", horasTrabajadas: 18 },
    { nombre: "Maria", horasTrabajadas: 20 },
];

let s = 0;

while (s < empleados.length) {
    let horasTrabajadas = empleados[s].horasTrabajadas;
    let montoPorHora = (horasTrabajadas <= 10) ? 30000 : 33000;
    let salario = horasTrabajadas * montoPorHora;

    console.log(`Señor/a ${empleados[s].nombre}, el número de horas trabajadas es ${horasTrabajadas} y su salario es de $${salario}`);

    s++; // Incrementamos el contador
}


console.log("-------------------------------------------------------------");

let dado;

while (true) {  
    dado = Math.floor(Math.random() * 6) + 1;

    if (dado % 2 === 0) {
        console.log(`El dado cayó en ${dado}, es un número PAR`);
        break; // Salimos del bucle cuando obtenemos un número par
    } else {
        console.log(`El dado cayó en ${dado}, es un número IMPAR, tirando de nuevo...`);
    }
}


console.log("---------------------------------------------------------")
/*
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tipoLavadora, cantidad, horas;
let costoPorHora = 0;

rl.question("Ingrese el tipo de lavadora (1 para Grande, 2 para Pequeña): ", function(tipo) {
    tipoLavadora = parseInt(tipo, 10);

    while (tipoLavadora !== 1 && tipoLavadora !== 2) {
        console.log("Tipo de lavadora inválido. Intente nuevamente.");
        return rl.question("Ingrese el tipo de lavadora (1 para Grande, 2 para Pequeña): ", function(tipo) {
            tipoLavadora = parseInt(tipo, 10);
        });
    }

    costoPorHora = (tipoLavadora === 1) ? 4000 : 3000;

    rl.question("Ingrese la cantidad de lavadoras a alquilar: ", function(cant) {
        cantidad = parseInt(cant, 10);

        rl.question("Ingrese la cantidad de horas de uso: ", function(hr) {
            horas = parseInt(hr, 10);

            let costoTotal = cantidad * horas * costoPorHora;

            if (cantidad > 3) {
                costoTotal *= 0.97; // Aplicar descuento del 3%
            }

            console.log(`Tipo de lavadora: ${tipoLavadora === 1 ? "Grande" : "Pequeña"}`);
            console.log(`Cantidad alquilada: ${cantidad}`);
            console.log(`Horas de uso: ${horas}`);
            console.log(`Costo total a pagar: $${costoTotal.toFixed(2)}`);

            rl.close();
        });
    });
});

*/
console.log("----------------------------------------------------------------")

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let materias = ["Física", "Química", "Biología", "Matemáticas", "Informática"];
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
}

pedirCalificacion(); // Iniciar el proceso

console.log("-------------------------------------------------------------")
/*
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("----------------------------------------------------------------")

let numeros = [];
let contador = 0;

while (contador < 3) {
    let num = parseFloat(prompt(`Ingrese el número ${contador + 1}: `));

    if (!isNaN(num)) {
        numeros.push(num);
        contador++;
    } else {
        console.log("Ingrese un número válido.");
    }
}

let mayor = Math.max(...numeros);
console.log(`El número mayor es: ${mayor}`);
*/
console.log("---------------------------------------------------------------");


let genero = "";
let edad = 0;
let ayudaEconomica = 0;

while (genero !== "masculino" && genero !== "femenino") {
    genero = prompt("Ingrese su género (masculino/femenino): ").toLowerCase();
}

while (isNaN(edad) || edad <= 0) {
    edad = parseInt(prompt("Ingrese su edad: "), 10);
}

if (genero === "masculino") {
    ayudaEconomica = 40000;
} else if (genero === "femenino") {
    if (edad < 50) {
        ayudaEconomica = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayudaEconomica = 100000;
    }
}

console.log(`El valor de la ayuda mensual es: $${ayudaEconomica}`);

console.log("-------------------------------------------------------------------");

let dias = 0;
let totalAPagar = 0;

while (isNaN(dias) || dias <= 0) {
    dias = parseInt(prompt("Ingrese la cantidad de días que asistirá al gimnasio: "), 10);
}

if (dias >= 90) {
    totalAPagar = dias * 955;
} else if (dias >= 30) {
    totalAPagar = dias * 1166;
} else if (dias >= 15) {
    totalAPagar = dias * 1200;
} else {
    totalAPagar = dias * 1500;
}

console.log(`El total a pagar en el gimnasio por ${dias} días es: $${totalAPagar}`);

console.log("----------------------------------------------------------------");
/*
const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fotocopias;
let totalpago = 0;
let precioPorCopia = 0;

// Pedir la cantidad de fotocopias asegurando que sea un número válido
rl.question("Ingrese la cantidad de fotocopias: ", function (input) {
    fotocopias = parseInt(input);

    while (isNaN(fotocopias) || fotocopias < 0) {
        console.log("Número de fotocopias no válido. Intente de nuevo.");
        fotocopias = parseInt(prompt("Ingrese la cantidad de fotocopias: "));
    }

    // Determinar el precio por copia según la cantidad
    if (fotocopias <= 499) {
        precioPorCopia = 120;
    } else if (fotocopias <= 749) {
        precioPorCopia = 100;
    } else if (fotocopias <= 999) {
        precioPorCopia = 80;
    } else {
        precioPorCopia = 50;
    }

    // Calcular el total a pagar
    totalpago = fotocopias * precioPorCopia;

    console.log(`El precio por copia es: $${precioPorCopia}`);
    console.log(`El total a pagar por ${fotocopias} copias es: $${totalpago}`);

    rl.close();
});
*/


/* rl.close();
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

    let totalpago = fotocopias * precioPorCopia;
    console.log(`El precio por copia es: $${precioPorCopia}`);
    console.log(`El total a pagar por ${fotocopias} copias es: $${totalpago}`);
}

function solicitarFotocopias() {
    rl.question("Ingrese la cantidad de fotocopias: ", function(fotocopias) {
        fotocopias = parseInt(fotocopias, 10);

        while (isNaN(fotocopias) || fotocopias < 0) {
            console.log("Número de fotocopias no válido. Intente de nuevo.");
            return solicitarFotocopias(); // Volver a solicitar el número
        }

        calcularTotal(fotocopias);
        rl.close();
    });
}

solicitarFotocopias();

console.log("-------------------------------------------------")
*/
/*
const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("-------------------------------------------------")


let emitePitido, discoGira;

rl.question("¿La computadora emite un pitido al iniciar? (si/no): ", function (respuesta1) {
    emitePitido = respuesta1.toLowerCase() === "si";

    rl.question("¿El disco duro gira al iniciar? (si/no): ", function (respuesta2) {
        discoGira = respuesta2.toLowerCase() === "si";

        while (true) {
            if (emitePitido && discoGira) {
                console.log("Póngase en contacto con un técnico de apoyo.");
            } else if (emitePitido && !discoGira) {
                console.log("Verificar contactos de unidad.");
            } else {
                console.log("Traiga la computadora para repararla en la central.");
            }
            break;
        }

        rl.close();
    });
});
*/
console.log("-------------------------------------------------------------")

const modelosDefectuosos = [119, 179, 189, 195, 221, 780];

rl.question("Ingrese el número de modelo de su automóvil: ", function (modelo) {
    modelo = parseInt(modelo);

    while (isNaN(modelo) || modelo <= 0) {
        console.log("Número de modelo inválido. Intente de nuevo.");
        modelo = parseInt(prompt("Ingrese el número de modelo de su automóvil: "));
    }

    if (modelosDefectuosos.includes(modelo)) {
        console.log("El automóvil está defectuoso, llevar a garantía.");
    } else {
        console.log("Su automóvil no está defectuoso.");
    }

    rl.close();
});

console.log("--------------------------------------------------------------")


const operadores = {
    "claro": { cargoFijo: 30000, valorMinuto: 100, paqueteDatos: 18000 },
    "movistar": { cargoFijo: 40000, valorMinuto: 250, paqueteDatos: 8000 },
    "tigo": { cargoFijo: 45000, valorMinuto: 200, paqueteDatos: 12000 }
};

rl.question("Ingrese su operador (Claro, Movistar o Tigo): ", function (operador) {
    operador = operador.toLowerCase();

    while (!operadores[operador]) {
        console.log("Operador no válido. Intente nuevamente.");
        operador = prompt("Ingrese su operador (Claro, Movistar o Tigo): ").toLowerCase();
    }

    rl.question("Ingrese la cantidad de minutos internacionales consumidos: ", function (minutos) {
        minutos = parseInt(minutos);

        while (isNaN(minutos) || minutos < 0) {
            console.log("Cantidad de minutos no válida. Intente nuevamente.");
            minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos: "));
        }

        let { cargoFijo, valorMinuto, paqueteDatos } = operadores[operador];

        let costoMinutos = minutos * valorMinuto;
        let totalPagar = cargoFijo + paqueteDatos + costoMinutos;

        console.log(`\nOperador: ${operador.charAt(0).toUpperCase() + operador.slice(1)}`);
        console.log(`Cargo Fijo: $${cargoFijo}`);
        console.log(`Paquete de datos: $${paqueteDatos}`);
        console.log(`Minutos internacionales (${minutos} min): $${costoMinutos}`);
        console.log(`Total a pagar: $${totalPagar}\n`);

        rl.close();
    });
});

console.log("----------------------------------------------------------------")


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

rl.question("Ingrese el tamaño del sándwich (pequeño/grande): ", function (tamaño) {
    tamaño = tamaño.toLowerCase();

    while (tamaño !== "pequeño" && tamaño !== "grande") {
        console.log("Tamaño no válido. Intente nuevamente.");
        tamaño = prompt("Ingrese el tamaño del sándwich (pequeño/grande): ").toLowerCase();
    }

    let total = precios[tamaño];
    console.log(`\nPrecio del sándwich ${tamaño}: $${total}`);

    rl.question("¿Desea agregar ingredientes adicionales? (si/no): ", function (respuesta) {
        respuesta = respuesta.toLowerCase();

        if (respuesta === "si") {
            rl.question("Ingrese los ingredientes separados por coma (tocineta, jalapeño, pavo, queso): ", function (ingredientes) {
                let ingredientesArray = ingredientes.split(",").map(i => i.trim());

                let costoIngredientes = 0;

                ingredientesArray.forEach(ing => {
                    if (precios.ingredientes[ing] !== undefined) {
                        costoIngredientes += precios.ingredientes[ing];
                    } else {
                        console.log(`Ingrediente no válido: ${ing}`);
                    }
                });

                total += costoIngredientes;
                console.log(`\nCosto ingredientes adicionales: $${costoIngredientes}`);
                console.log(`Total a pagar por el sándwich: $${total}\n`);

                rl.close();
            });
        } else {
            console.log(`Total a pagar por el sándwich: $${total}\n`);
            rl.close();
        }
    });
});
