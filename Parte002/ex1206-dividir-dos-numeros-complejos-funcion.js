// Ejercicio 1206: Definir una nueva función para dividir dos números complejos.

class NumeroComplejo {
    constructor(real, imaginaria) {
        this.real = real;
        this.imaginaria = imaginaria;
    }

    sumar(otroComplejo) {
        return new NumeroComplejo(this.real + otroComplejo.real, this.imaginaria + otroComplejo.imaginaria);
    }

    restar(otroComplejo) {
        return new NumeroComplejo(this.real - otroComplejo.real, this.imaginaria - otroComplejo.imaginaria);
    }

    multiplicar(otroComplejo) {
        let real = (this.real * otroComplejo.real) - (this.imaginaria * otroComplejo.imaginaria);
        let imaginaria = (this.real * otroComplejo.imaginaria) + (this.imaginaria * otroComplejo.real);

        return new NumeroComplejo(real, imaginaria);
    }

    dividir(otroComplejo) {
        let denominador = otroComplejo.imaginaria * otroComplejo.imaginaria + otroComplejo.real * otroComplejo.real;
        let real = (this.real * otroComplejo.real + this.imaginaria * otroComplejo.imaginaria) / denominador;
        let imaginaria = (otroComplejo.real * this.imaginaria - this.real * otroComplejo.imaginaria) / denominador;

        return new NumeroComplejo(real, imaginaria);
    }
}

let numero1 = new NumeroComplejo(2, 3);
let numero2 = new NumeroComplejo(-5, 7);

let resultadoDivision = numero1.dividir(numero2);
console.log(resultadoDivision);
