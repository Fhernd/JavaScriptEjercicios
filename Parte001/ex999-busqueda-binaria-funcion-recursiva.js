// Ejercicio 999: Definir una función recursiva para realizar una búsqueda binaria sobre números.

Array.prototype.busquedaBinaria = function(numero) {
    let mitad = parseInt(this.length/2);

    if (numero === this[mitad]) {
        return mitad;
    }

    if (numero > this[mitad]) {
        return mitad + this.slice(mitad, this.length).busquedaBinaria(numero);
    } else {
        return this.slice(0, mitad).busquedaBinaria(numero);
    }
}

let datos = [3, 7, 2, 13, 11, 5, 19, 29, 17];
console.log(datos);
datos.sort((a, b) => a - b);
console.log(datos);

console.log();

console.log(datos.busquedaBinaria(2));  // 0
console.log(datos.busquedaBinaria(3));  // 1
console.log(datos.busquedaBinaria(19));  // 7
console.log(datos.busquedaBinaria(29));  // 8
