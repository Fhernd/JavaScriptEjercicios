// Ejercicio 910: Definir una función para crear un objeto a partir de la asociación de propiedades y valores.

// ['id', 'marca', 'cpu', 'ram']
// [1001, 'MSi', 'Intel', 32]
// {id: 1001, marca: 'MSi', cpu: 'Intel', ram: 32}

function zip(propiedades, valores) {
    if (!Array.isArray(propiedades)) {
        throw TypeError('El argumento «propiedades» debe ser un arreglo.');
    }
    
    if (!Array.isArray(valores)) {
        throw TypeError('El argumento «valores» debe ser un arreglo.');
    }

    if (!propiedades.every(e => typeof e == 'string')) {
        throw TypeError('Todos los elementos del arreglo de propiedades deben ser cadenas de caracteres.');
    }

    return propiedades.reduce((o, p, i) => ((o[p] = valores[i]), o), {});
}

let propiedades = ['id', 'marca', 'cpu', 'ram'];
let valores = [1001, 'MSi', 'Intel', 32];

try {
    console.log(zip(propiedades, valores));
    // {id: 1001, marca: 'MSi', cpu: 'Intel', ram: 32}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(zip(2.2, valores)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(zip(propiedades, 3.1415)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();
propiedades.push(1000);

try {
    console.log(zip(propiedades, valores)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
