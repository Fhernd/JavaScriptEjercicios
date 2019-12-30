// Ejercicio 279: La programación orientada a objetos en JavaScript no existe.

class Persona{
	constructor(nombre, apellido, email){
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
    }

	saludar(){
		return `Hola, soy ${this.nombre}.`;
    }
}

console.log(Persona.prototype);
