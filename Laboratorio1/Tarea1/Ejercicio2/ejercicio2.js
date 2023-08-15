// Solicitar al usuario que ingrese un número
const numero = parseInt(prompt("Ingrese un número:"));

// Verificar si el número es un múltiplo de 3 y 11
if (numero % 3 === 0 && numero % 11 === 0) {
    console.log(`${numero} es múltiplo de 3 y 11.`);
} else {
    console.log(`${numero} no es múltiplo de 3 y 11 simultáneamente.`);
}
