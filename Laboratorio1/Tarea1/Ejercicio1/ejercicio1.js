// Solicitar las longitudes al usuario
let diama = prompt("Ingrese la longitud de la diagonal mayor: ");
let diame = prompt("Ingrese la longitud de la diagonal menor: ");
let lado = prompt("Ingrese la longitud del lado del rombo: ");

// Proceso de multiplicación de ambas longitudes y diviendo el resultado
let area = (diama * diame) / 2;
let perimetro = 4 * lado;

console.log("El área del rombo es: " + area);
console.log("El perímetro del rombo es: " + perimetro);
