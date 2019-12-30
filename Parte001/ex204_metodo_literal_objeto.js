// Ejercicio 204: Agregar un método a un literal de objeto.

let persona = {nombre: 'Juan', apellido: 'Ortiz', edad: 39, email: 'juan@mail.co'};

console.log(persona);

persona.mostrarDatos = function() {
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.edad);
    console.log(this.email);
}

console.log();

console.log(persona);

console.log();

persona.mostrarDatos();
