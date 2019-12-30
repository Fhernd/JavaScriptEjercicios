// Ejercicio 212: Crear método para comprobar igualdad de contenido de objetos.

function Punto(x, y){
    this.x = x;
    this.y = y;
}

Punto.prototype.iguales = function(otroPunto){
    return this.x == otroPunto.x && this.y == otroPunto.y;
};

let punto1 = new Punto(3, 7);
let punto2 = new Punto(1, 5);

console.log(punto1.iguales(punto2));

let punto3 = new Punto(1, 5);

console.log(punto1.iguales(punto3));
console.log(punto2.iguales(punto3));
