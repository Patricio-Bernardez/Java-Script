// Funcion
function notaValida(nota) {
    nota = parseInt(nota);
    return !isNaN(nota) && nota >= 1 && nota <= 10;
}

function calcularPromedio(notas) {
    return notas.reduce((total, nota) => total + nota, 0) / notas.length;
}

const notasCuatrimestres = [];

// Ciclo
for (let i = 1; i <= 3; i++) {
    let nota;
    do {
        nota = prompt(`Ingresa la nota final del ${i}° cuatrimestre:`);
        if (!notaValida(nota)) {
            alert("Ingrese una nota del 1 al 10");
        }
    } while (!notaValida(nota));
    notasCuatrimestres.push(parseInt(nota));
}

const promedioFinal = calcularPromedio(notasCuatrimestres).toFixed(2);

console.log("El promedio final de los tres cuatrimestres es: " + promedioFinal);
alert("El promedio final de los tres cuatrimestres es: " + promedioFinal);