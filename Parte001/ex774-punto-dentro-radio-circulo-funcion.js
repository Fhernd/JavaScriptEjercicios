// Ejercicio 774: Crear una función para validar si un punto está dentro de un círculo.

function puntoDentroDeCirculo(x, y, radio, a, b) {
    if (typeof x === 'number' && typeof y === 'number' && typeof radio === 'number' && typeof a === 'number' && typeof b === 'number') {
        let distancia = (a - x) * (a - x) + (b - y) * (b - y);

        return distancia < radio * radio;
    } else {
        throw TypeError('Todos los argumentos deben ser numéricos.')
    }
}

try {
    console.log(puntoDentroDeCirculo(0, 0, 5, 1, 1));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(puntoDentroDeCirculo(0, 0, 5, 6, 6));   // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}
