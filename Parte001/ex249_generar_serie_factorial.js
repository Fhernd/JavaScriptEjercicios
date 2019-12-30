// Ejercicio 249: Generar valores de la serie factorial con una función generadora.

// 0! = 1
// 1! = 1
// 2! = 2
// 3! = 6 = 1 * 2 * 3
// 4! = 24 = 1 * 2 * 3 * 4
// 5! = 120 = 1 * 2 * 3 * 4 * 5

function * generarFactorial(){
    yield 1;
    yield 1;

    factorial = 1;
    contador = 2;

    while(true){
        factorial *= contador;
        ++contador;

        yield factorial;
    }
}

let generadorFactorial = generarFactorial();

console.log(generadorFactorial.next());
console.log(generadorFactorial.next());
console.log(generadorFactorial.next());
console.log(generadorFactorial.next());
console.log(generadorFactorial.next());
console.log(generadorFactorial.next());
console.log(generadorFactorial.next());
console.log(generadorFactorial.next());
console.log(generadorFactorial.next());
console.log(generadorFactorial.next());
