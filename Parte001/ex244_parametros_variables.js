// Ejercicio 244: Especificar una cantidad variable de parámetros en una función.

// rest parameters

function diasSemana(...dias){
    console.log(dias);

    dias.forEach((valor) => {
        console.log(valor);
    });

    console.log(dias[1]);
}

function sumar(...valores){
    return valores.reduce((valorAnterior, valorActual) => {
        return valorAnterior + valorActual;
    });
}

diasSemana('Martes', 'Jueves', 'Sábado');
diasSemana('Martes', 'Miércoles', 'Jueves', 'Sábado', 'Domingo');

console.log();

console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(2, 3, 5));

let numeros = [1, 3, 5, 7, 9];
console.log(...numeros);
console.log(sumar(...numeros));
