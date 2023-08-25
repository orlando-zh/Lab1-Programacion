function evenOrOdd(numStr) {
    let sumPares = 0;
    let sumImpares = 0;

    for (const digit of numStr) {
        const num = parseInt(digit);

        if (isNaN(num)) {
            return "La cadena contiene caracteres no numéricos.";
        }

        if (num % 2 === 0) {
            sumPares += num;
        } else {
            sumImpares += num;
        }
    }

    if (sumPares === sumImpares) {
        return "La sumatoria de pares e impares es igual.";
    } else if (sumPares > sumImpares) {
        return "La sumatoria de los pares es mayor que los impares.";
    } else {
        return "La sumatoria de los impares es mayor que los pares.";
    }
}

const userInput = prompt("Ingresa un número:");

if (userInput === null) {
    console.log("No ingresaste un número.");
} else {
    console.log(evenOrOdd(userInput));
}
