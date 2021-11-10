// Ejercicio 1394: Iterar las llaves y valores de un objeto por medio de la función keys().

// Object.keys()

let persona = {
    id: 1001,
    nombre: 'Diana',
    email: 'diana@mail.co'
};

console.log(persona);

console.log();

let llaves = Object.keys(persona);
console.log(llaves);
console.log(typeof llaves);

console.log();

for (const llave of llaves) {
    console.log(`Llave: ${llave} - Valor: ${persona[llave]}`);
}
