function CalcularHipotenusa() {
    var ladoA = parseFloat(document.getElementById("ladoA").value);
    var ladoB = parseFloat(document.getElementById("ladoB").value);

    if (!isNaN(ladoA) && !isNaN(ladoB) && ladoA > 0 && ladoB > 0) {
        var hipotenusa = Math.sqrt(ladoA * ladoA + ladoB * ladoB);
        document.getElementById("resultado").innerHTML = "La longitud de la hipotenusa es: " + hipotenusa.toFixed(2);
    } else {
        document.getElementById("resultado").innerHTML = "Ingresa valores válidos y positivos para los lados.";
    }
}
