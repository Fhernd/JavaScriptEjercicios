// Ejercicio 637: Definición de una clase de objeto con EMCAScript 6 (ES6).

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distancia(otroPunto) {
        return Math.sqrt(Math.pow(this.x - otroPunto.x, 2) + Math.pow(this.y - otroPunto.y, 2));
    }
}

let punto1 = new Punto(0, 0);
let punto2 = new Punto(5, 3);

let distancia = punto1.distancia(punto2);

console.log(`La distancia entre los dos puntos dados es igual a ${distancia}.`);
