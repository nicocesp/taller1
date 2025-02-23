function calcularSalario(horasTrabajadas){
    let salario= 0;
    let montoPorHora= 0;

    if (horasTrabajadas >= 1 && horasTrabajadas <= 10) {
        montoPorHora = 30000;}else if (horasTrabajadas > 10){
            montoPorHora = 33000;
        }
        salario = horasTrabajadas * montoPorHora;
        return salario;
    }
   
    const empleados = [
        { nombre: "Juan", horasTrabajadas: 8 },
        { nombre: "Pedro", horasTrabajadas: 12 },
        { nombre: "Ana", horasTrabajadas: 15 },
        { nombre: "Luis", horasTrabajadas: 18 },
        { nombre: "Maria", horasTrabajadas: 20 },
    ];
    empleados.forEach(empleados => {
        let resultado = calcularSalario(empleados.horasTrabajadas);
        console.log(`señor/a ${empleados.nombre}, el numero de horas trabajadas es ${empleados.horasTrabajadas} es de $${resultado}`);
    })
     
    
       console.log("------------------");

    const dado = Math.floor(Math.random() * 6) + 1;

    if (dado % 2 === 0 ) {
        console.log(`El dado cayó en ${dado}, es un número PAR`); 
    } else {
        console.log(`El dado cayó en ${dado}, es un número IMPAR`)
    }


    console.log("------------------");


    function calcularCosto(tipoLavadora, cantidad, horas){
        let costoPorHora = 0;

        
        if(tipoLavadora ===1){costoPorHora = 4000; } else if (tipoLavadora === 2){costoPorHora = 3000; } else {
            console.log ( "Tipo de lavadora invalido." ) ;
            return;
        }
        let costoTotal = cantidad * horas * costoPorHora;
        if (cantidad > 3) {
            costoTotal *= 0.97;
        }

        console.log(`tipo de lavadora: ${tipoLavadora === 1 ? "Grande" : "Pequeña"}`);
        console.log(`Cantidad alquilada: ${cantidad}`);
        console.log(`Horas de uso:${horas}`);
        console.log(`costo total a pagar: $${costoTotal.toFixed(2)}`);
    } 
        //ejemplo de uso:
        calcularCosto(1, 4, 5); // lavadora grande, 4 unidades, 5 horas
        calcularCosto(2, 2, 6); // lavadora pequeña; 2 unidades, 6 horas.

        console.log("------------------");

let fisica = 6;
let quimica = 5;
let biologia = 6;
let matematicas = 9;
let informatica = 10


let sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;

let porcentajeFinal = (sumaCalificaciones/50)*100;

// determina calificacion cuantitativa
let calificionCualitativa;
if (porcentajeFinal >= 0 && porcentajeFinal <= 59.9) { calificacionCualitativa = "Mala";} else if (porcentajeFinal >= 60 && porcentajeFinal <= 80) { calificacionCualitativa = "Buena";} else {
    calificacionCualitativa = "Excelente";
}

console.log(`tu porcentaje es ${porcentajeFinal.toFixed(2)}% y tu calificacion es ${calificacionCualitativa}.`);


console.log("------------------");



const readline = require("readline"); //readline facilita la entrada y la salida de datos proporcionada por el usuario.

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar los tres números al usuario
rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {
        rl.question("Ingrese el tercer número: ", (num3) => {
            // Convertir a número
            // parsefloat() convierte una cadena a un número
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            num3 = parseFloat(num3);

            // Verificar cuál es el mayor
            let mayor;

            if (num1 >= num2 && num1 >= num3) {
                mayor = num1;
            } else if (num2 >= num1 && num2 >= num3) {
                mayor = num2;
            } else {
                mayor = num3;
            }

            console.log(`El número mayor es: ${mayor}`);

            rl.close();
        });
    });
});


console.log("------------------");

let genero = "femenino";
let edad = 40;
let ayudaEconomica = 0;

if (genero === "masculino") {
    ayudaEconomica = 40000} 
    else if(genero === "femenino") {
       if (edad < 50) ayudaEconomica = 120000;
    } else if (edad >= 30 && edad <= 50 ) {ayudaEconomica = 100000;
    } else {ayudaEconomica = 0;}
    
    

console.log(`El valor de la ayuda mensual es: $${ayudaEconomica}`);


console.log("------------------");

// mensualidad Gimnacio
let dias = 35;
let totalAPagar = 0;

if (dias >= 90) {totalAPagar = dias * 955;

} else if (dias >= 30){totalAPagar = dias * 1166;

} else if(dias >= 15){totalAPagar = dias * 1200;

} else {totalAPagar = dias * 1500;}

console.log(`El total a pagar en el gimnacio por ${dias} dias es: $${totalAPagar}`);

console.log("------------------");

//const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("ingrese la cantidad de fotocopias: ", function(fotocopias){
        fotocopias = parseInt(fotocopias); // convertir entrada a numero

    

let totalpago = 0;
let precioPorCopia = 0;

if (fotocopias >= 0 && fotocopias <= 499) {
    precioPorCopia = 120;
} else if (fotocopias >= 500 && fotocopias <= 749) { precioPorCopia = 100;
} else if (fotocopias >= 750 && fotocopias <= 999) { precioPorCopia = 80;
} else if (fotocopias >= 1000) { precioPorCopia = 50;

 } else { console.log ("Numero de fotocopias no valido.");
    rl.close();
    return;
 }
totalpago = fotocopias * precioPorCopia; 
console.log(`El precio por copia es: $${precioPorCopia}`);
console.log (`El total a pagar por ${fotocopias} copias es: $${totalpago}`);

rl.close();

});