// Ejercicio 636: Usar la deconstrucción de un objeto para obtener los valores de sus propiedades.

function obtenerDatosPersona() {
    return {nombre: 'Daniela', apellido: 'Ortiz', correo: 'daniela@mail.co', id: 1001};
}

let {nombre, apellido, correo, id} = obtenerDatosPersona();

console.log('Contenido de la variable `nombre`:', nombre);
console.log('Contenido de la variable `apellido`:', apellido);
console.log('Contenido de la variable `correo`:', correo);
console.log('Contenido de la variable `id`:', id);

console.log();

let persona = obtenerDatosPersona();

let nombrePersona = persona.nombre;
let apellidoPersona = persona.apellido;
let correoPersona = persona.correo;
let idPersona = persona.id;
