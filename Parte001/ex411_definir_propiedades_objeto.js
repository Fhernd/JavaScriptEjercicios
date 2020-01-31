// Ejercicio 411: Agregar propiedades a un objeto por medio de Object.defineProperty().

let persona = {};
Object.defineProperty(persona, 'id', {value: 1, writable: false, enumerable: true});

console.log(persona.id);
persona.id = 2; // No tiene efecto la operación de modificación
console.log(persona.id);

console.log();

Object.defineProperty(persona, 'nombre', {value: 'Daniela', writable: true, enumerable: true});
console.log(persona.nombre);
persona.nombre = 'Yuli Daniela';
console.log(persona.nombre);

console.log();

for(let p in persona){
    console.log(p);
}
