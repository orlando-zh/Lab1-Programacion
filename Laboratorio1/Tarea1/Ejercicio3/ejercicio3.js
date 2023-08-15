function calcularMCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function calcularMCM(a, b) {
    return (a * b) / calcularMCD(a, b);
}

const numero1 = parseInt(prompt("Ingrese el primer número:"));
const numero2 = parseInt(prompt("Ingrese el segundo número:"));

const resultado = calcularMCM(numero1, numero2);

console.log(`El mínimo común múltiplo de ${numero1} y ${numero2} es: ${resultado}`);