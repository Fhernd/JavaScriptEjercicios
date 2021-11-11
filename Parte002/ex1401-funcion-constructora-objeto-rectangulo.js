// Ejercicio 1400: Crear función constructora para representar un rectángulo y sus operaciones básicas.

function Rectangulo(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;

    this.calcularArea = function() {
        return this.ancho * this.alto;
    }

    this.calcularPerimetro = function() {
        return 2 * (this.ancho + this.alto);
    }
}

let rectangulo = new Rectangulo(10, 20);
console.log(rectangulo.calcularArea()); // 200
console.log(rectangulo.calcularPerimetro());    // 60
