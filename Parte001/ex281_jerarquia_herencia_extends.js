// Ejercicio 281: Crear una jerarquía de herencia con la palabra clave extends.

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        return `Hola, soy ${this.nombre}`;
    }
}

class Estudiante extends Persona{
    constructor(nombre, apellido, carnet, carrera){
        super(nombre, apellido);
        this.carnet = carnet;
        this.carrera = carrera;
    }
}

let edward = new Estudiante('Edward', 'Ortiz', '202001397', 'Electrónica');

console.log(edward);
console.log(edward.saludar());
