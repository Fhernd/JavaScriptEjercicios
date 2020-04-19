// Ejercicio 641: Definir métodos getter y setter para acceder modificar o miembros de una clase base.

class Figura {
    constructor(id, x, y) {
        this._id = id;
        this._x = x;
        this._y = y;
    }

    toString() {
        return `ID: ${this._id} - x: ${this._x} - y: ${this._y}`;
    }

    get id () {
        return this._id;
    }

    get x() {
        return this._x;
    }

    set x(nuevoX) {
        this._x = nuevoX;
    }

    get y() {
        return this._y;
    }

    set y(nuevoY) {
        this._y = nuevoY;
    }
}

class Rectangulo extends Figura{
    constructor(id, x, y, ancho, alto) {
        super(id, x, y);

        this._ancho = ancho;
        this._alto = alto;
    }

    toString() {
        return `${super.toString()} - ancho: ${this._ancho} - alto: ${this._alto}`;
    }

    static crearRectanguloBasico() {
        return new Rectangulo(1001, 5, 3, 10, 5);
    }

    get ancho() {
        return this._ancho;
    }

    set ancho(nuevoAncho) {
        this._ancho = nuevoAncho;
    }

    get alto() {
        return this._alto;
    }

    set alto(nuevoAlto) {
        this._alto = nuevoAlto;
    }
}

class Circulo extends Figura {
    constructor(id, x, y, radio) {
        super(id, x, y);
        this._radio = radio;
    }

    toString() {
        return `${super.toString()} - radio: ${this._radio}`;
    }

    static crearCirculoBasico() {
        return new Circulo(1002, 13, 13, 10);
    }

    get radio() {
        return this._radio;
    }

    set radio(nuevoRadio) {
        this._radio = nuevoRadio;
    }
}

let rectangulo = new Rectangulo(1001, 5, 3, 10, 20);

console.log(rectangulo.toString());

console.log(rectangulo.id);
console.log(rectangulo.x);
console.log(rectangulo.y);
console.log(rectangulo.ancho);
console.log(rectangulo.alto);

console.log();

rectangulo.x = 0;
rectangulo.y = 0;

console.log(rectangulo.x);
console.log(rectangulo.y);
