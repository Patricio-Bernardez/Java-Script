let cuatrimestre1 = prompt("Ingresa la nota final del 1° cuatrimestre:");
cuatrimestre1 = parseInt(cuatrimestre1)
let cuatrimestre2 = prompt("Ingresa la nota final del 2° cuatrimestre:");
cuatrimestre2 = parseInt(cuatrimestre2)
let cuatrimestre3 = prompt("Ingresa la nota final del 3° cuatrimestre:");
cuatrimestre3 = parseInt(cuatrimestre3);

if (isNaN(cuatrimestre1) || isNaN(cuatrimestre2) || isNaN(cuatrimestre3)) {
    console.log("Ingrese numeros validos del 1 al 10.");
    alert("Ingrese numeros validos del 1 al 10.");
} else {

    let promedioFinal = (cuatrimestre1 + cuatrimestre2 + cuatrimestre3) / 3;


    console.log("El promedio final de los tres cuatrimestres es: " + promedioFinal);
    alert("El promedio final de los tres cuatrimestres es: " + promedioFinal);
}