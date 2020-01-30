// Ejercicio 392: Crear una función para implementar el algoritmo recursivo de la multiplicación.

// Análisis:
// a = 2 , b = 3
// a * b
// a + a + a = 3a = 3*2 = 6

function multiplicar(a, b){
    if (a < b){
        return multiplicar(b, a);
    } else if (b != 0){
        return a + multiplicar(a, b - 1);
    } else {
        return 0;
    }
}

console.log(multiplicar(2, 3));
console.log(multiplicar(10, 10));
console.log(multiplicar(3, 7));
