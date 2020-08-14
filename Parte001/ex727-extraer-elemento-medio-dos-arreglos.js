// Ejercicio 727: Extraer el elemento medio de dos arreglos de 3 elementos y crear uno nuevo con esos dos elementos.

function extraerElementosMedios(arreglo1, arreglo2) {
    if (arreglo1 instanceof Array && arreglo2 instanceof Array){
        if (arreglo1.length === 3 && arreglo2.length === 3) {
            return [arreglo1[1], arreglo2[1]];
        } else {
            throw Error('Ambos arreglos deben tener 3 elementos.');
        }
    } else {
        throw TypeError('Ambos argumentos deben ser de tipo arreglo.');
    }
}

try {
    console.log(extraerElementosMedios([1, 2, 3], [4, 5, 6]));  // [2, 5]
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerElementosMedios("[1, 2, 3]", [4, 5, 6]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerElementosMedios([1, 2, 3], "[4, 5, 6]"));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerElementosMedios([], [4, 5, 6]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerElementosMedios([1, 2, 3], [4]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerElementosMedios(['Python', 'JavaScript', 'Java'], ['C', 'C++', 'PHP']));  // ['JavaScript', 'C++']
} catch (e) {
    console.log(`Error: ${e.message}`);
}
