// Ejercicio 1400: Crear una función constructora para representar un objeto computador.

function Computador(id, marca, cpu, ram) {
    this.id = id;
    this.marca = marca;
    this.cpu = cpu;
    this.ram = ram;
}

Computador.prototype.mostrarInformacion = function() {
    return `ID: ${this.id} - Marca: ${this.marca} - CPU: ${this.cpu} - RAM: ${this.ram}`;
}

let portatil = new Computador(1001, 'MSi', 'Intel Core i7', 32);

console.log(portatil);

console.log();

console.log(portatil.mostrarInformacion());
