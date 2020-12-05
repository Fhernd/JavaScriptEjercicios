// Ejercicio 927: Crear una clase para representar un tipo de dato personalizado con la palabra clave class.

// Mecanismo #2: Utilizar la palabra clave class (ES6):

class Computador {
    constructor(id, marca, procesador, ram, ssd) {
        this.id = id;
        this.marca = marca;
        this.procesador = procesador;
        this.ram = ram;
        this.ssd = ssd;
    }

    iniciar() {
        console.log(`El computador se está iniciando...`);
    }

    mostrarCapacidades() {
        let capacidades = `
        Procesador: ${this.procesador}
        RAM: ${this.ram}GB
        SSD: ${this.ssd}GB
        `;
    
        return capacidades;
    }
}

let computadorGamer = new Computador(1001, 'MSi', 'Intel Core i7', 32, 700);
console.log(computadorGamer);

console.log();

console.log(computadorGamer.id);
console.log(computadorGamer.marca);

console.log();

computadorGamer.iniciar();

console.log();

console.log(computadorGamer.mostrarCapacidades());
