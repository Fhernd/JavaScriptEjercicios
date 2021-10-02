// Ejercicio 1223: Iterar los caracteres de un texto utilizando elementos en un ciclo for-of.

// for - of

let lenguaje = 'JavaScript';
console.log(lenguaje);

console.log();

for(const i in lenguaje) {
    console.log(lenguaje[i]);
}

console.log();

for(const e of lenguaje) {
    console.log(e);
}
