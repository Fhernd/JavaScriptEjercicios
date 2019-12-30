// Ejercicio 203: Sobrescribir el método de instancia toString() en una función constructura.

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

    this.toString = function() {
        return `Nombre: ${this.nombre} - Apellido: ${this.apellido} - Edad: ${this.edad} - Email: ${this.email}`;
    }
}

let edward = new Persona('Edward', 'Ortiz', 33, 'edward@mail.co');

console.log(edward);

console.log();

edward.mostrarDatos();

console.log();

console.log(edward.toString());
