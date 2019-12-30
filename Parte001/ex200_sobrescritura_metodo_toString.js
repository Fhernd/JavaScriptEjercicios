// Ejercicio 200: Sobrescribir el método toString() en una clase personalizada.

class Persona{
    constructor(nombre, apellido, edad, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }

    mostrarDatos(){
        console.log('Nombre:', this.nombre);
        console.log('Apellido:', this.apellido);
        console.log('Edad:', this.edad);
        console.log('Email:', this.email);
    }

    toString(){
        return `Nombre: ${this.nombre} - Apellido: ${this.apellido} - Edad: ${this.edad} - Email: ${this.email}`;
    }
}

let persona = new Persona('Juan', 'Ortiz', 39, 'juan@mail.co');

console.log(persona);

console.log(persona.toString());
