// Ejercicio 1005: Imprimir el siguiente patrón de asteriscos utilizando un ciclo for.

// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

for(let i = 1; i <= 6; ++i) {
    let resultado = '';

    for(let j = 1; j <= i; ++j) {
        resultado += '* ';
    }

    console.log(resultado);
}
