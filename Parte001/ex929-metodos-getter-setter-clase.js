// Ejercicio 929: Crear métodos getter y setter en la implementación de una clase.

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
}

let computadorGamer = new Computador(1001, 'MSi', 'Intel Core i7', 32, 720);
console.log(computadorGamer);

console.log();

console.log(computadorGamer.id);
console.log(computadorGamer.marca);

console.log();

console.log(computadorGamer.capacidades);

console.log();

computadorGamer.capacidades = {cpu: 'Intel Core i7 9th Generacion', ram: 64, ssd: 1000};
console.log(computadorGamer.capacidades);
