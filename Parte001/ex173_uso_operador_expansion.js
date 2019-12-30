// Ejercicio 173: Uso básico del operador de expansión ...

// spread operator

function sumar(a, b, c){
    return a + b + c;
}

let numeros = [1, 2, 3];

let suma = sumar(...numeros);

console.log(suma);

console.log()

let primos = [2, 3, 5];

let resultado = [...numeros, ...primos];

console.log(resultado);
