// Ejercicio 250: Crear una función generadora para generar números primos.

function * generarPrimos(){
    let primo = 2;

    yield primo;

    while(true){

        let numero = primo + 1;
        let contadorDivisores = 0;
        let i = 1;

        while(i <= numero){
            if (numero % i == 0){
                ++contadorDivisores;
            }
            
            if(contadorDivisores > 2){
                break;
            }

            ++i;
        }

        if (contadorDivisores == 2){
            primo = numero;
            yield primo;
        }

        ++primo;
    }
}

let generador = generarPrimos();

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
