// Ejercicio 531: Operaciones básicas sobre un objeto de la clase Map de ECMAScript 6.

let capitales = new Map();

capitales.set('Colombia', 'Bogotá');
capitales.set('Perú', 'Lima');
capitales.set('Alemania', 'Berlín');
capitales.set('USA', 'Washington');
capitales.set('Argentina', 'Buenos Aires');
capitales.set('Venezuela', 'Caracas');
capitales.set('México', 'Ciudad de México');

console.log('Contenido actual del mapa `capitales`:', capitales)
console.log('Cantidad de elementos del mapa `capitales`:', capitales.size)

console.log();

console.log('Iteración de un objeto Map por llave/valor:');

for(let [k, v] of capitales){
    console.log(`La capital de ${k} es ${v}.`);
}

console.log();

console.log('Iteración de un objeto Map por sus llaves:');

for(let k of capitales.keys()){
    console.log(k);
}

console.log();

console.log('Iteración de un objeto Map por sus valores:');

for(let v of capitales.values()){
    console.log(v);
}

console.log();

console.log('Objeto generador para iterar las llaves:');
let generador = capitales.keys();

console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);

console.log();

console.log('Objeto generador para iterar los valores:');
generador = capitales.values();

console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
