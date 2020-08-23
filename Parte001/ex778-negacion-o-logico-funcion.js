// Ejercicio 778: Crear una función personalizada para el operador lógico NOR.

// or: ||
// a b => || - NOR
// 0 0 => 0  - 1
// 0 1 => 1  - 0
// 1 0 => 1  - 0
// 1 1 => 1  - 0

function nor(a, b) {
    if (typeof a === 'boolean' && typeof b === 'boolean') {
        return !(a || b);
    } else {
        throw TypeError('Los argumentos deben ser de tipo booleano.');
    }
}

try {
    console.log(nor(false, false)); // true
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(nor(false, true)); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(nor(true, false)); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(nor(true, true)); // false
} catch (e) {
    console.log(`Error: ${e.message}`);
}
