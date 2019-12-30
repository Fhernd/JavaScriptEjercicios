// Ejercicio 254: Enviar mensajes o argumentos a una función generadora.

function * generarEnteros(limiteSuperior){
    for(let i = 1; i <= limiteSuperior; ++i){
        yield i;
    }
}

let generador = generarEnteros(5);
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
