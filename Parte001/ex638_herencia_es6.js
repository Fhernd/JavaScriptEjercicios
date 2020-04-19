// Ejercicio 638: Definir una jerarquía de herencia con la palabra clave extends (ES6).

class Figura {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
}

class Rectangulo extends Figura{
    constructor(id, x, y, ancho, alto) {
        super(id, x, y);

        this.ancho = ancho;
        this.alto = alto;
    }
}

class Circulo extends Figura {
    constructor(id, x, y, radio) {
        super(id, x, y);
        this.radio = radio;
    }
}
