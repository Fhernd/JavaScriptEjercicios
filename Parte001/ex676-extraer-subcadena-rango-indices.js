// Ejercicio 676: Extraer una subcadena de un texto indicando los índices de inicio y fin.

function extraerSubcadena(texto, inicio, fin) {
    if (inicio < fin) {
        if (inicio >= 0 && fin <= texto.length) {
            return texto.substring(inicio, fin);
        } else {
            return null;
        }
    } else {
        return null;
    }
}

console.log(extraerSubcadena('JavaScript', 5, 20)); // null
console.log(extraerSubcadena('JavaScript', -5, 10)); // null
console.log(extraerSubcadena('JavaScript', 0, 4)); // Java
console.log(extraerSubcadena('JavaScript', 4, 10)); // Script
