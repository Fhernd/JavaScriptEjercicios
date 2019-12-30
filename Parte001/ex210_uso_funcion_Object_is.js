// Ejercicio 210: Comprobar si dos objetos son iguales con la función Object.is().

function Punto(x, y){
    this.x = x;
    this.y = y;
}

Punto.prototype.distancia = function(otroPunto){
    let distancia = Math.sqrt(Math.pow(this.x - otroPunto.x, 2) + Math.pow(this.y - otroPunto.y, 2));

    return distancia;
}

Punto.prototype.toString = function() {
    return `(${this.x}, ${this.y})`;
}

let punto1 = new Punto(3, 7);
let punto2 = new Punto(-2, -1);

console.log(punto1.toString());
console.log(punto2.toString());

console.log();

console.log(Object.is(punto1, punto2));

let punto3 = punto1;

console.log(Object.is(punto1, punto3));
