document.addEventListener("DOMContentLoaded", function () {
    let dividir = document.getElementById("dividir");
    let resultado = document.getElementById("resultado");

    dividir.addEventListener("click", function () {
        let String = document.getElementById("String").value;
        let Array = String.split(" ");
        resultado.textContent = "Array de Palabras: " + Array.join(", ");
    })
})