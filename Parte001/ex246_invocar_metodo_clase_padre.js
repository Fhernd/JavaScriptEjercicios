// Ejercicio 246: Invocar una función declarada en una clase padre (superclase).

class Computador{
    constructor(marca, procesador, ram, precio){
        this.marca = marca;
        this.procesador = procesador;
        this.ram = ram;
        this.precio = precio;
    }

    getMarca(){
        return this.marca;
    }

    getProcesador(){
        return this.procesador;
    }

    getRam(){
        return this.ram;
    }

    getPrecio(){
        return this.precio;
    }
}

class ComputadorGamer extends Computador{
    constructor(marca, procesador, ram, precio, tarjetaGrafica, refrigeracion) {
        super(marca, procesador, ram, precio);
        this.tarjetaGrafica = tarjetaGrafica;
        this.refrigeracion = refrigeracion;
    }

    getTarjetaGrafica(){
        return this.tarjetaGrafica;
    }

    getRefrigeracion(){
        return this.refrigeracion;
    }

    getPrecio(){
        return super.getPrecio() + 1000;
    }
}

let computadorGamer = new ComputadorGamer('MSi', 'Intel Core i7', '128GB', 2000, 'GeForce', 'Avanzado');

console.log(computadorGamer);

console.log(computadorGamer.getPrecio());
