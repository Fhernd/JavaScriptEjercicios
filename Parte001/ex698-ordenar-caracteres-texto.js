// Ejercicio 698: Crear una función personalizada para ordenar los caracteres de una palabra.

function ordenarCaracteres(palabra) {
    return palabra.split('').sort().join('');
}

console.log(ordenarCaracteres('PHP'));  // HPP
console.log(ordenarCaracteres('JavaScript'));  // JSaaciprtv
console.log(ordenarCaracteres('Python'));  // Phnoty
