// Ejercicio 1000: Definir una función para ordenar un arreglo de cadenas acorde al último carácter.

function ordenarCadenasSegunUltimoCaracter(cadenas) {
    if (!Array.isArray(cadenas)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    if (!cadenas.every(e => typeof e === 'string')) {
        throw TypeError('Todos los elementos del arreglo deben ser cadenas de caracteres.');
    }

    return cadenas.sort((x, y) => x.charCodeAt(x.length - 1) - y.charCodeAt(y.length - 1));
}

let lenguajes = ['Python', 'JavaScript', 'C#', 'Go', 'PHP', 'Java']

try {
    let resultado = ordenarCadenasSegunUltimoCaracter(lenguajes);
    
    // n, t, #, o, P, a
    // #, P, a, n, o, t

    console.log(resultado); // ['C#', 'PHP', 'Java', 'Python', 'Go', 'JavaScript']
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    let resultado = ordenarCadenasSegunUltimoCaracter(42);  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
