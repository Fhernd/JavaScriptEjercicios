// Ejercicio 995: Definir una función recursiva para calcular la suma de un arreglo de números.

function sumaRecursivaArreglo(numeros) {
    if (numeros.length === 1) {
        return numeros[0];
    } else {
        return numeros.pop(0) + sumaRecursivaArreglo(numeros);
    }
}

console.log(sumaRecursivaArreglo([1, 2, 3, 4, 5])); // 15
console.log(sumaRecursivaArreglo([2, 3, 5, 7, 11, 13, 17])); // 58
