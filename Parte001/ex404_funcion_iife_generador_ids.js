// Ejercicio 404: Crear una función tipo IIFE para generar identificadores.

let generadorIds = (function(){
    let contador = 0;

    return function(){
        ++contador;

        return `ID_${contador}`;
    };
})();

console.log(generadorIds());
console.log(generadorIds());
console.log(generadorIds());
console.log(generadorIds());
console.log(generadorIds());
