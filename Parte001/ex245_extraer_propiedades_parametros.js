// Ejercicio 245: Usar las propiedades de un objeto como parámetros de una función.

// Object destructuring

function obtenerNombreEs5(objeto){
    let nombre = objeto.nombre;

    console.log(nombre);
}

function obtenerNombreEs6({nombre, edad}){
    console.log(nombre);
    console.log(edad);
}

let persona = {nombre: 'Daniela', apellido: 'Ortiz', edad: 29};

obtenerNombreEs5(persona);

console.log();

obtenerNombreEs6(persona);
