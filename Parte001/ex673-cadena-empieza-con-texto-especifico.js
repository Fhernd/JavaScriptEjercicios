// Ejercicio 673: Comprobar si una cadena de caracteres (texto) empieza con una cadena específica.

function empiezaCon(texto, subtexto) {
    if (texto.length > 0 && subtexto.length > 0) {
        if (texto.length >= subtexto.length) {
            let subcadena = texto.substring(0, subtexto.length);

            return subcadena == subtexto;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(empiezaCon('JavaScript', 'Java'));  // true
console.log(empiezaCon('JavaScript', 'JAVA'));  // false
console.log(empiezaCon('JavaScript', 'JavaScript'));  // true
console.log(empiezaCon('JavaScript', 'JavaScript-ES6'));  // false
