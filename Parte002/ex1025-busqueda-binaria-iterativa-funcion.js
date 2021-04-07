// Ejercicio 1025: Definir una función para implementar la búsqueda binaria de forma iterativa.

function busquedaBinaria(datos, valor) {
    let inicio = 0;
    let final = datos.length - 1;
    let mitad = Math.floor((inicio + final) / 2);

    while (valor != datos[mitad] && inicio < final) {
        if (valor < datos[mitad]) {
            final = mitad - 1;
        } else if (valor > datos[mitad]) {
            inicio = mitad + 1;
        }

        mitad = Math.floor((inicio + final) / 2);
    }

    return datos[mitad] == valor ? mitad : -1;
}

let numeros = [1, 2, 3, 4, 5, 6, 8, 9, 10];

console.log(busquedaBinaria(numeros, 2));   // 1
console.log(busquedaBinaria(numeros, 11));   // -1
console.log(busquedaBinaria(numeros, 0));   // -1
console.log(busquedaBinaria(numeros, 5));   // 4
