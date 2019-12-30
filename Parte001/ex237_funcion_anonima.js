// Ejercicio 237: Crear y ejecutar una función anónima.

let sumar = function(a, b) {
    let suma = a + b;

    return suma;
};

console.log(typeof sumar);
console.log(sumar instanceof Function);
console.log(sumar(2, 3));

// IIFE => Inmediately Invoked Function Expression

console.log();

(function(){
    console.log("IIFE => Inmediately Invoked Function Expression");
})();
