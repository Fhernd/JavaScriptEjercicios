// Ejercicio 630: Uso de parámetros variables (rest parameters) en una función.

function sumar(a, b, ...c) {
    let suma = a + b;

    if (c.length) {
        c.forEach((valor) => {
            suma += valor;
        });
    }

    return suma;
}

let resultado = sumar(1, 2);
console.log('Contenido de la variable resultado:', resultado);

console.log();

resultado = sumar(1, 2, 3)
console.log('Contenido de la variable resultado:', resultado);

console.log();

resultado = sumar(1, 2, 3, 4, 5)
console.log('Contenido de la variable resultado:', resultado);

console.log();

let numeros = [1, 2, 3, 4, 5]

resultado = sumar(...numeros);
console.log('Contenido de la variable resultado:', resultado);
