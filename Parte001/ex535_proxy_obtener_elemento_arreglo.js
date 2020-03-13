// Ejercicio 535: Crear un handler para cambiar el comportamiento de acceso a un arreglo.

// Proxy

let handler = {
    get: function(arreglo, indice){
        if (arreglo[indice] === 0){
            return false;
        } else {
            return true;
        }
    }
};

let numeros = [2, 3, 0, 5, 7, 0, 11, 0, 13];

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);

console.log();

let proxy = new Proxy(numeros, handler);

console.log(proxy[0]);
console.log(proxy[1]);
console.log(proxy[2]);
