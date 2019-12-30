// Ejercicio 202: Definir un método de instancia en una función constructora.

function Persona(nombre, apellido, edad, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;

    this.mostrarDatos = function () {
        console.log('Nombre:', this.nombre);
        console.log('Apellido:', this.apellido);
        console.log('Edad:', this.edad);
        console.log('Email:', this.email);
    };
}

let edward = new Persona('Edward', 'Ortiz', 33, 'edward@mail.co');

console.log(edward);

edward.mostrarDatos();

let daniela = new Persona('Daniela', 'Ortiz', 26, 'daniela@mail.co');

daniela.mostrarDatos();
