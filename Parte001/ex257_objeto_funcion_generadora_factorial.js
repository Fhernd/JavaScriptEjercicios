// Ejercicio 257: Crear una literal de objeto con una función generadora de factorial.

let objetoFactorial = {
    factorial: 1,
    auxiliar: 1,
    [Symbol.iterator](){
        return this;
    },
    next(){
        this.factorial *= this.auxiliar;
        ++this.auxiliar;

        return {value: this.factorial};
    }
};

for (let i = 1; i <= 20; i++) {
    console.log(objetoFactorial.next().value);
}
