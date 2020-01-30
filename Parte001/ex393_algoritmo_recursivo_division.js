// Ejercicio 393: Crear una función para implementar el algoritmo recursivo de la división.

function dividir(a, b) {
    if (b == 0) {
        return 0;
    } else if (a - b == 0){
        return 1;
    } else if (a < b) {
        return 0;
    } else {
        return 1 + dividir(a - b, b);
    }
}

console.log(dividir(2, 0));
console.log(dividir(2, 2));
console.log(dividir(1, 2));
console.log(dividir(2, 3));
console.log(dividir(3, 2));
console.log(dividir(21, 3));
console.log(dividir(21, 7));
