// Ejercicio 1016: Imprimir el contenido de un arreglo en sentido inverso (izquierda a derecha).

let numeros = [1, 2, 3, 4, 5];

console.log('Sentido natural de recorrido de un ciclo (con índices):');
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

console.log();

console.log('Sentido natural de recorrido de un ciclo (for of):');
for (const n of numeros) {
    console.log(n);
}

console.log();

console.log('Sentido inverso de recorrido de un ciclo (con índices):');
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}

console.log();

console.log('Sentido inverso de recorrido de un ciclo (for of):');
for (const n of numeros.reverse()) {
    console.log(n);
}
