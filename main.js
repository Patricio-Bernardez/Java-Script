//Funciones
function notaValida(nota) {
    nota = parseInt(nota);
    return !isNaN(nota) && nota >= 1 && nota <= 10;
}

function calcularPromedio(cuatrimestre1, cuatrimestre2, cuatrimestre3) {
    return (cuatrimestre1 + cuatrimestre2 + cuatrimestre3) / 3;
}
let cuatrimestre1, cuatrimestre2, cuatrimestre3;

//Ciclo
do {
    cuatrimestre1 = prompt("Ingresa la nota final del 1° cuatrimestre:");
    if (!notaValida(cuatrimestre1)){
        alert("Ingrese una nota del 1 al 10")
    }
} while (!notaValida(cuatrimestre1));

do {
    cuatrimestre2 = prompt("Ingresa la nota final del 2° cuatrimestre:");
    if (!notaValida(cuatrimestre2)){
        alert("Ingrese una nota del 1 al 10")
    }
} while (!notaValida(cuatrimestre2));


do {
    cuatrimestre3 = prompt("Ingresa la nota final del 3° cuatrimestre:");
    if (!notaValida(cuatrimestre3)){
        alert("Ingrese una nota del 1 al 10")
    }
} while (!notaValida(cuatrimestre3));

let promedioFinal = calcularPromedio(parseInt(cuatrimestre1), parseInt(cuatrimestre2), parseInt(cuatrimestre3));

promedioFinal = promedioFinal.toFixed(2);

console.log("El promedio final de los tres cuatrimestres es: " + promedioFinal);
alert("El promedio final de los tres cuatrimestres es: " + promedioFinal);