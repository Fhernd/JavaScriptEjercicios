// Ejercicio 835: Crear un arreglo a partir dos arreglos y formar pares a partir de esos dos arreglos.

// A = [1, 2, 3, 4, 5]
// B = [6, 7, 8, 9, 10]
// C = [[1, 6], [2, 7], [3, 8], [4, 9], [5, 10]]

function crearPares(datos1, datos2) {
    if (!Array.isArray(datos1) || !Array.isArray(datos2)) {
        throw TypeError('Ambos argumentos deben ser arreglos.');
    }
    
    if (datos1.length < datos2.length) {
        return datos1.reduce((a, d, i) => {
                a.push([d, datos2[i]]);
                return a;
            }, []);
    } else {
        return datos2.reduce((a, d, i) => {
            a.push([d, datos1[i]]);
            return a;
        }, []);
    }
}

try {
    console.log(crearPares([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(crearPares({a: 1}, [6, 7, 8, 9, 10]));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
