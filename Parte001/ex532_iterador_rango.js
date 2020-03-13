// Ejercicio 532: Crear una función generadora para generar un rango de valores enteros.

function* generadorRango(inicio = 0, final = 100, paso = 1){
    let contador = 0;
    
    for(let i = inicio; i <= final; i += paso){
        ++contador;

        yield i;
    }

    return contador;
}

let generador = generadorRango(1, 10);

console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);

let suma = 2 + 3;

console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().done);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().done);
console.log(generador.next().value);
console.log(generador.next().done);
