// Ejercicio 931: Definir un método estático dentro de una función constructora.

function Computador(id, marca, procesador, ram, ssd) {
    this.id = id;
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.ssd = ssd;
}

Computador.crear = function() {
    return new Computador(0, '', '', 0, 0);
}

let computadorPorDefecto = Computador.crear();
console.log(computadorPorDefecto);

console.log();

computadorPorDefecto.id = 1001;
computadorPorDefecto.marca = 'MSi';
computadorPorDefecto.procesador = 'Intel Core i7';
computadorPorDefecto.ram = 32;
computadorPorDefecto.ssd = 720;

console.log(computadorPorDefecto);
