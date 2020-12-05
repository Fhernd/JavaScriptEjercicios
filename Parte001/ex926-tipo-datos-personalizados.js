// Ejercicio 926: Crear una clase para representar un tipo de dato personalizado.

// Mecanismo #1: Funciones constructores:

function Computador(id, marca, procesador, ram, ssd) {
    this.id = id;
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.ssd = ssd;
}

Computador.prototype.iniciar = function() {
    console.log(`El computador se está iniciando...`);
}

Computador.prototype.mostrarCapacidades = function() {
    let capacidades = `
    Procesador: ${this.procesador}
    RAM: ${this.ram}GB
    SSD: ${this.ssd}GB
    `;

    return capacidades;
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
