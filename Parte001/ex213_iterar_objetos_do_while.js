// Ejercicio 213: Iterar un conjunto de objetos por medio del ciclo do while.

function Punto(x, y){
    this.x = x;
    this.y = y;
}

Punto.prototype.distancia = function(otroPunto){
    let distancia = Math.sqrt(Math.pow(this.x - otroPunto.x, 2) + Math.pow(this.y - otroPunto.y, 2));

    return distancia;
};


let punto1 = new Punto(1, 1);
let punto2 = new Punto(2, 1);
let punto3 = new Punto(0, 1);
let punto4 = new Punto(5, 7);
let punto5 = new Punto(1, 2);

let puntos = [punto1, punto2, punto3, punto4, punto5];

let origen = new Punto(0, 0);
let i = 0;

do{
    console.log(puntos[i]);
    ++i;
} while(puntos[i].distancia(origen) <= 3);
