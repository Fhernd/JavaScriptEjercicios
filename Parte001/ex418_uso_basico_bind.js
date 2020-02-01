// Ejercicio 418: Uso básico de la función bind() para asociar una función a un contexto.

let module1 = {
    x: 42,
    getX: function() {
        return this.x;
    }
};

let module2 = {
    x: 8,
    getX: function() {
        return this.x;
    }
};

const unboundGetX = module1.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

let boundGetX = unboundGetX.bind(module1);
console.log(boundGetX());
// expected output: 42

boundGetX = unboundGetX.bind(module2);
console.log(boundGetX());
// expected output: 8
