// Ejercicio 206: Crear una clase para representar un punto geométrico.

class Punto{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return `(${this.x}, ${this.y})`;
    }

    distancia(otroPunto){
        return Math.sqrt(Math.pow(this.x - otroPunto.x, 2) + Math.pow(this.y - otroPunto.y, 2));
    }
}

let punto1 = new Punto(1, 3);
let punto2 = new Punto(5, 7);

console.log(punto1);
console.log(punto2);

console.log();

console.log(punto1.toString());
console.log(punto2.toString());

console.log();

console.log(punto1.distancia(punto2));
console.log(punto2.distancia(punto1));
