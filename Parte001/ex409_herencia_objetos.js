// Ejercicio 409: Crear una jerarquía de herencia con funciones constructoras.

function Persona(documento, nombre){
    this.documento = documento;
    this.nombre = nombre;

    this.mostrarDatos = function() {
        return `Documento: ${this.documento} - Nombre: ${this.nombre}`;
    };
}

function Estudiante(documento, nombre, carnet, carrera){
    this.carnet = carnet;
    this.carrera = carrera;

    Persona.call(this, documento, nombre);
}

let edward = new Estudiante('123456789', 'Edward', 20200201, 'Informática');
console.log(edward);
console.log(edward.mostrarDatos());
