// Ejercicio 1222: Iterar los caracteres de un texto utilizando índices en un ciclo.

let lenguaje = 'JavaScript';
console.log(lenguaje);

console.log();

for(const i in lenguaje) {
    console.log(i);
}

console.log();

for(const i in lenguaje) {
    console.log(lenguaje[i]);
}
