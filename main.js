function calcularPromedio() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 1 || nota1 > 10 || nota2 < 1 || nota2 > 10 || nota3 < 1 || nota3 > 10) {
        document.getElementById('resultado').textContent = "Ingresar notas validas del 1 al 10.";
    } else {
        const promedio = (nota1 + nota2 + nota3) / 3;
        document.getElementById('resultado').textContent = "El promedio final es: " + promedio.toFixed(2);
        const resultadoJSON = JSON.stringify({ promedio: promedio.toFixed(2) });
        localStorage.setItem('resultado', resultadoJSON);
    }
}
document.getElementById('calcular').addEventListener('click', calcularPromedio);
const resultadoJSON = localStorage.getItem('resultado');
if (resultadoJSON) {
    const resultadoObj = JSON.parse(resultadoJSON);
    document.getElementById('resultado').textContent = "Nota final: " + resultadoObj.promedio;
}