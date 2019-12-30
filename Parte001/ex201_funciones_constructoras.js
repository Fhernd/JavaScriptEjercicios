// Ejercicio 201: Crear una función constructora para la creación de objetos.

function Persona(nombre, apellido, edad, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
}

let edward = new Persona('Edward', 'Ortiz', 33, 'edward@mail.co');

console.log(edward);

console.log();

console.log(edward.nombre);
console.log(edward.apellido);
console.log(edward.edad);
console.log(edward.email);
