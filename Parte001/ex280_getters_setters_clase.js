// Ejercicio 280: Definir métodos getters y setters en una clase.

class Persona{
    constructor(nombre, apellido, email, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }
}

let edward = new Persona('Edward', 'Ordoñez', 'edward@mail.co', 29);
console.log(edward);

console.log(edward.apellido);

edward.apellido = 'Ortiz';
console.log(edward.apellido);
