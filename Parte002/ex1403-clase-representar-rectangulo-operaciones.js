// Ejercicio 1403: Crear una clase para representar un rectángulo y sus operaciones básicas.

class Rectangulo {

    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }
    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

let rectangulo = new Rectangulo(10, 20);
console.log(rectangulo.calcularArea()); // 200
console.log(rectangulo.calcularPerimetro());    // 60
