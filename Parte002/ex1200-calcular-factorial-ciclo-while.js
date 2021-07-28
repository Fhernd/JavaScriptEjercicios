// Ejercicio 1200: Calcular el factorial de un número utilizando un ciclo (loop) while.

function factorial(numero) {
    let resultado = 1;
    let i = 1;

    while(i <= numero) {
        resultado *= i;

        ++i;
    }

    return resultado;
}

console.log(factorial(5));  // 120
console.log(factorial(6));  // 720
console.log(factorial(7));  // 5040
