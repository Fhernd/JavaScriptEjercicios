// Ejercicio 1402: Crear función constructora para representar un círculo y sus operaciones básicas.

function Circulo(radio) {
    this.radio = radio;

    this.calcularArea = function() {
        return Math.PI * Math.pow(this.radio, 2);
    }

    this.calcularPerimetro = function() {
        return Math.PI * 2 * this.radio;
    }
}

let circulo = new Circulo(5);
console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());
