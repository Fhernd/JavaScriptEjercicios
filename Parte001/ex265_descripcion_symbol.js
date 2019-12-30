// Ejercicio 265: Especificar una descripción para un elemento Symbol().

const ID = Symbol('ID para literal de objeto');

let persona = {
    [ID]: '12345',
    nombre: 'Edward',
    apellido: 'Ortiz',
    edad: 33
};

console.log(persona);

console.log(Symbol('ID para literal de objeto') == Symbol('ID para literal de objeto'));
