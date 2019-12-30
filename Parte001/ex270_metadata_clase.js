// Ejercicio 270: Especificar una propiedad de una clase como metadata usando Symbol.

let tamagnio = Symbol('Tamaño');

class Coleccion{
    constructor(){
        this[tamagnio] = 0;
    }

    agregar(elemento){
        this[this[tamagnio]] = elemento;
        ++this[tamagnio];
    }

    static TamagnioActual(instancia){
        return instancia[tamagnio];
    }
}

let numeros = new Coleccion();
console.log(Coleccion.TamagnioActual(numeros));

numeros.agregar(2);
console.log(Coleccion.TamagnioActual(numeros));
numeros.agregar(3);
console.log(Coleccion.TamagnioActual(numeros));
