// Ejercicio 731: Definir una función para comprobar si un arreglo tiene elementos duplicados.

function tieneValoresDuplicados(arreglo) {
    if (arreglo instanceof Array) {
        for (let i = 0; i < arreglo.length - 1; ++i) {
            if (arreglo.slice(i + 1).indexOf(arreglo[i]) !== -1) {
                return true;
            }
        }

        return false;
    } else {
        throw TypeError('El argumento de la función debe ser un arreglo.');
    }
}

try {
    console.log(tieneValoresDuplicados([2, 7, 3, 5, 7, 11]));   // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneValoresDuplicados([2, 7, 3, 5, 13, 11]));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneValoresDuplicados([2]));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneValoresDuplicados([]));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneValoresDuplicados(Array()));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneValoresDuplicados(new Array()));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneValoresDuplicados(new Array(0)));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneValoresDuplicados("[2, 7, 3, 5, 13, 11]"));  // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneValoresDuplicados(['JS', 'Java', 'Python', 'JS', 'C++']));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(tieneValoresDuplicados(['C', 'Java', 'Python', 'JS', 'JS']));  // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}
