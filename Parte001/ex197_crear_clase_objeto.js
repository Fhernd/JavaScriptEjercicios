// Ejercicio 197: Crear una clase para representar los datos de una persona.

class Persona{
    constructor(nombre, apellido, edad, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }
}

let persona = new Persona('Edward', 'Ortiz', 33, 'edward@mail.co');

console.log(persona);

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
