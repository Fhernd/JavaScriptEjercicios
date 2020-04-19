// Ejercicio 640: Definición y acceso de miembros de clase static.

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

    static crearRectanguloBasico() {
        return new Rectangulo(1001, 5, 3, 10, 5);
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

    static crearCirculoBasico() {
        return new Circulo(1002, 13, 13, 10);
    }
}

let rectangulo = Rectangulo.crearRectanguloBasico();
console.log(rectangulo.toString());

console.log();

let circulo = Circulo.crearCirculoBasico();
console.log(circulo.toString());
