// Ejercicio 534: Crear una función generadora para generar números únicos de ID.

function* generadorIds(id = 1){
    while(true){
        yield id;
        ++id;
    }
}

let generador = generadorIds();

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());

console.log();

generador = generadorIds(1000);
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
