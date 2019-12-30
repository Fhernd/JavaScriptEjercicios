// Ejercicio 48: Obtener y recorrer las llaves de un objeto.

let persona = {id: 101, nombre: 'Edward', apellido: 'Ortiz', correo: 'edw@mail.co'};

console.log(typeof Object.keys(persona));
console.log(Object.keys(persona) instanceof Array);
console.log(Object.keys(persona));

console.log();

Object.keys(persona).forEach((valor) => {
    console.log(valor)
});
