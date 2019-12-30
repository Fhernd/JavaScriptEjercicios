// Ejercicio 208: Agregar un método a una función constructora con prototype.

function Punto(x, y){
    this.x = x;
    this.y = y;
}

Punto.prototype.distancia = function(otroPunto){
    let distancia = Math.sqrt(Math.pow(this.x - otroPunto.x, 2) + Math.pow(this.y - otroPunto.y, 2));

    return distancia;
}

let punto1 = new Punto(3, 7);
let punto2 = new Punto(-2, -1);

console.log(punto1);
console.log(punto2);

console.log();

console.log(punto1.distancia(punto2));
