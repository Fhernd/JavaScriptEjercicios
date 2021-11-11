// Ejercicio 1399: Usar una función constructora para calcular el volumen de un cilindro.

function Cilindro(altura, diametro) {
    this.altura = altura;
    this.diametro = diametro;
}

Cilindro.prototype.calcularVolumen = function() {
    let radio = this.diametro / 2;

    return this.altura * Math.PI * Math.pow(radio, 2);
}

let cilindro = new Cilindro(10, 7);
console.log(cilindro);

console.log();

console.log(cilindro.calcularVolumen());
