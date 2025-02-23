const readline = require("readline");
const { parseArgs } = require("util");

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

console.log("------------------");

rl.question("¿La computadora emite un partido al iicirar? (si/no): ", function (respuest1){
  let emitePitido = respuesta1.toLowerCase() === "si";
  rl.question("¿El disco duro gira al iniciral? (si/no): ", function (respuesta2){
    let discoGira = respuesta2.toLowerCase() === "si";
    console.log(diagnosticarComputadora(emitePitido, discoGira));
    rl.close();
  });  
});

function diagnosticarComputadora (emitePitido, discoGira){
if (emitePitido && discoGira) {
 return "Póngase en coctacto con un técnico de apoyo.";
}else if(emitePitido && !discoGira) {
 return "verificar contactos de unidad.";
}else if(!emitePitido && !discoGira){
    return "traiga la computadora para repararla en la central.";
}
 }

 console.log("------------------");

 const modelosDefectuosos  = [
    119,
    179,
    189,
    195,
    221,
    780];

 rl.question("ingrese el número de modelo de su automovil: ", function (modelo) {
    modelo = parseInt(modelo)
 
    if (modelosDefectuosos.includes(modelo)) { console.log("El automovil está defectuoso, llevar a garantía.");
 } else {
    console.log("Su automovil no está defectuoso.");
}
 });
rl.close();    


console.log("------------------");

const operadores = {
"claro": { cargoFijo: 30000, valorMinuto: 100, paqueteDatos: 18000},
"movistar": { cargoFijo: 40000, valorMinuto: 250, paqueteDatos: 8000 },
"tigo": { cargoFijo: 45000, valorMinuto: 200, paqueteDatos: 12000}
}; 
// operador
rl.question("Ingrese su operador (Claro, Movistar o Tigo", function (operador){
    operador = operador.toLowerCase();

    if (!operadores[operador]) {
        console.log("Operador no Válido. Intente nuevamente.");
        rl.close();
        return;
    }
  

// minutos internacionales
rl.question("Ingrese la cantidad de minutos internacionales consumidos: ", function (minutos) {
    minutos = parseInt(minutos);

    if (isNaN(minutos) || minutos < 0) {
        console.log("Cantidad de minutos no válida.");
        rl.close();
        return;
    }
    
    let {cargoFijo, valorMinuto, paqueteDatos} = operadores[operador];

    let costoMinutos = minutos * valorMinuto;
    let totalPagar = cargoFijo + paqueteDatos + costoMinutos;

    console.log(`\nOperador: ${operador.charAt(0).toUpperCase() + operador.slice(1)}`);
    console.log(`Cargo Fijo: $${cargoFijo}`);
    console.log(`Paquete de datos: $${paqueteDatos}`);
    console.log(`Minutos internacionales: (${minutos} min):  $${costoMinutos}`);
    console.log(`Total a pagar: $${totalPagar}\n`);

    rl.close();

    });
});


console.log("------------------");

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

// tamaño de sandwich.
rl.question("Ingrese el tamaño de sandwich (pequeño/grande): ", function (tamaño) {
    tamaño = tamaño.toLowerCase();

    if (tamaño !== "pequeño" && tamaño !== "grande") {
        console.log("tamaño no valido. intente nuevamente .");
        rl.close();
        return;
    }

    let total = precios[tamaño]; // precio del tamaño de sandwich
    console.log (`\nPrecio del sandwich ${tamaño} es: $${total}`);

    rl.question("¿Desea agregar ingredientes adicionales? (si/no): ", function (respuesta) {
        respuesta = respuesta.toLowerCase();
        if (respuesta === "si" && respuesta === "si") {
            rl.question ("Ingrese los ingredientes separados por coma (tocineta, jalapeño, pavo, queso):", function (ingredientes){

                let ingredientesArray = ingredientes.split(",").map(i => i.trim()); 
                
                let costoIngredientes = 0; // costo de los ingredientes

                ingredientesArray.forEach(ing => {
                    if (precios.ingredientes[ing] !== undefined){
                        costoIngredientes += precios.ingredientes[ing];
                    }else{
                        console.log(`Ingrediente no válido: ${ing}`);
                    }
                });
                total += costoIngredientes; // precio de los ingredientes
                console.log (`\nCosto ingredientes adicionales:  $${costoIngredientes}`);
                console.log(`Total a pagar por el sándwich: $${total}\n`);

                rl.close();
            });
        }else{
            console.log(`Total a pagar por el sándwich: $${total}\n`);
            rl.close();
        }
    });
});