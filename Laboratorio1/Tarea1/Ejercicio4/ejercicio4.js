function calcularCuadrado(numero) {
    return numero * numero;
}

const num = parseFloat(prompt("Ingrese un número:"));
const cuadrado = calcularCuadrado(num);

console.log(`El cuadrado de ${num} es: ${cuadrado}`);
