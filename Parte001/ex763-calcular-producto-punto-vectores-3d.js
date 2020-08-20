// Ejercicio 763: Crear una función para calcular el producto punto de dos vectores 3D.

// A = [1, 2, 3]
// B = [9, 8, 7]
// A X B = 9 + 16 + 21 = 46

function calcularProductoPunto(vector1, vector2) {
    if (vector1 instanceof Array && vector2 instanceof Array) {
        if (vector1.length === 3 && vector1.length == vector2.length) {
            let producto = 0;

            vector1.forEach((valor, indice) => {
                producto += valor * vector2[indice];
            });

            return producto;
        } else {
            throw Error('Ambos vectores deben tener 3 elementos.');
        }
    } else {
        throw TypeError('Los dos vectores deben ser arreglos.');
    }
}

try {
    console.log(calcularProductoPunto([1, 2, 3], [9, 8, 7]));   // 46
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularProductoPunto([4, 5, 6], [9, 8, 7]));   // 36 + 40 + 42 = 118
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularProductoPunto({a: 1}, [9, 8, 7]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularProductoPunto([4, 5], [9, 8, 7]));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
