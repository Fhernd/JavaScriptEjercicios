// Ejercicio 278: Crear una clase de objeto en ES5 y ES6.

// ECMAScript 5:

let Persona = (function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
});

Persona.prototype.saludar = function(){
    return '¡Hola, soy ' + this.nombre + '!';
}

let edward = new Persona('Edward', 'Ortiz', 'edward@mail.co');
console.log(edward.saludar());

let daniela = new Persona('Daniela', 'Ordoñez', 'daniela@mail.co');
console.log(daniela.saludar());
