// Ejercicio 681: Crear una función para validar si un carácter está disponible en un texto.

function caracterDisponible(texto, caracter) {
    if (texto.length) {
        for(let i = 0; i < texto.length; ++i) {
            if (texto[i] === caracter) {
                return true;
            }
        }

        return false;
    } else {
        return false;
    }
}

console.log(caracterDisponible('', 'S'));   // false
console.log(caracterDisponible('JavaScript', 'S'));   // true
console.log(caracterDisponible('JavaScript', 's'));   // false
console.log(caracterDisponible('JavaScript', ' '));   // false
console.log(caracterDisponible('JavaScript', 'X'));   // false
console.log(caracterDisponible('JavaScript', 'J'));   // false
console.log(caracterDisponible('JavaScript', 'a'));   // true
