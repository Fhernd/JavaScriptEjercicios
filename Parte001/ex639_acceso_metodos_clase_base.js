// Ejercicio 639: Acceder y sobreescribir un método de instancia de una clase base.

class Figura {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }

    toString() {
        return `ID: ${this.id} - x: ${this.x} - y: ${this.y}`;
    }
}

class Rectangulo extends Figura{
    constructor(id, x, y, ancho, alto) {
        super(id, x, y);

        this.ancho = ancho;
        this.alto = alto;
    }

    toString() {
        return `${super.toString()} - ancho: ${this.ancho} - alto: ${this.alto}`;
    }
}

class Circulo extends Figura {
    constructor(id, x, y, radio) {
        super(id, x, y);
        this.radio = radio;
    }

    toString() {
        return `${super.toString()} - radio: ${this.radio}`;
    }
}

let rectangulo = new Rectangulo(1001, 5, 3, 10, 5);
console.log(rectangulo.toString());

console.log();

let circulo = new Circulo(1002, -5, -2, 20);
console.log(circulo.toString());
