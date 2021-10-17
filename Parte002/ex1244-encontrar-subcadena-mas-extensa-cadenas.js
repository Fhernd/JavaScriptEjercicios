// Ejercicio 1244: Definir una función para encontrar la subcadena más extensa entre dos cadenas.

function encontrarSubcadenaMasExtensa(cadena1, cadena2) {
    let contenido = [cadena1, cadena2].concat().sort();

    let caracter1 = contenido[0];
    let caracter2 = contenido[contenido.length - 1];
    let n = caracter1.length;
    let i = 0;

    while (i < n && caracter1.charAt(i) == caracter2.charAt(i)) {
        ++i;
    }

    return caracter1.substring(0, i);
}

let resultado = encontrarSubcadenaMasExtensa('JavaScript', 'Java');     // Java
console.log(resultado);

console.log();

resultado = encontrarSubcadenaMasExtensa('SQLYa', 'SQLParaTodos');     // SQL
console.log(resultado);
