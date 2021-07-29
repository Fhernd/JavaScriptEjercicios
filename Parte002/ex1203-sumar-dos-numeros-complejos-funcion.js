// Ejercicio 1203: Definir una nueva función para sumar dos números complejos.

// parte real + parte imaginaria

class NumeroComplejo {
    constructor(real, imaginaria) {
        this.real = real;
        this.imaginaria = imaginaria;
    }

    sumar(otroNumeroComplejo) {
        return new NumeroComplejo(this.real + otroNumeroComplejo.real, this.imaginaria + otroNumeroComplejo.imaginaria);
    }
}

let numero1 = new NumeroComplejo(2, 3);
let numero2 = new NumeroComplejo(-5, 7);

console.log(numero1);
console.log(numero2);

console.log();

let suma = numero1.sumar(numero2);
console.log(suma);  // NumeroComplejo {real: -3, imaginaria: 10}
