// Ejercicio 930: Crear propiedades computadas (derivadas) dentro de una clase de objeto.

class Computador {
    constructor(id, marca, cpu, ram, ssd) {
        this.id = id;
        this.marca = marca;
        this.cpu = cpu;
        this.ram = ram;
        this.ssd = ssd;
    }

    get capacidades() {
        return {
            cpu: this.cpu,
            ram: this.ram,
            ssd: this.ssd
        }
    }

    set capacidades(nuevasCapacidades) {
        this.cpu = nuevasCapacidades.cpu;
        this.ram = nuevasCapacidades.ram;
        this.ssd = nuevasCapacidades.ssd;
    }

    get['fabricante']() {
        return `El fabricante es: ${this.marca}`;
    }

    set['fabricante'](fabricante) {
        this.marca = fabricante;
    }
}

let computadorGamer = new Computador(1001, 'MSi', 'Intel Core i7', 32, 720);
console.log(computadorGamer);

console.log();

console.log(computadorGamer.id);
console.log(computadorGamer.marca);

console.log();

console.log(computadorGamer.fabricante);

console.log();

computadorGamer.fabricante = 'Micro-Star International (MSi)';
console.log(computadorGamer.fabricante);

console.log();

console.log(computadorGamer.marca);
