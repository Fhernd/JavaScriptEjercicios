// Ejercicio 172: Buscar el índice de un objeto en un arreglo a partir del valor de una propiedad.

let daniela = {nombre: 'Daniela', email: 'daniela@mail.com', edad: 23};
let german = {nombre: 'Germán', email: 'german@mail.com', edad: 29};
let edward = {nombre: 'Edward', email: 'edward@mail.com', edad: 33};

let personas = [daniela, german, edward];

console.log(personas);

console.log();

let indice = personas.findIndex((objeto, indice, personas) => {
    return objeto.nombre == 'Edward';
});

console.log(indice);
