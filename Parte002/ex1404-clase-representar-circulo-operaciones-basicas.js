// Ejercicio 1404: Crear una clase para representar un círculo y sus operaciones básicas.

class Circulo {
    constructor(radio) {
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }

    calcularPerimetro() {
        return Math.PI * 2 * this.radio;
    }
}

let circulo = new Circulo(5);
console.log(circulo.calcularArea());
console.log(circulo.calcularPerimetro());
