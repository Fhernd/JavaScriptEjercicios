// Ejercicio 752: Crear una función para convertir a mayúscula o minúscula según el conteo de esos caracteres.

// PyTHOn
// # Mayúsculas: 4
// # Minúsculas: 2
// PYTHON

function cambiarMinusculaMayuscula(texto) {
    if (typeof texto === 'string') {
        let contadorMinusculas = 0;
        let contadorMayusculas = 0;

        for(let i = 0; i < texto.length; ++i) {
            if(/[a-z]/.test(texto[i])) {
                ++contadorMinusculas;
            } else {
                ++contadorMayusculas;
            }
        }

        if (contadorMinusculas > contadorMayusculas) {
            return texto.toLowerCase();
        } else {
            return texto.toUpperCase();
        }
    } else {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }
}

try {
    console.log(cambiarMinusculaMayuscula('PyTHoN'));   //  PYTHON
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cambiarMinusculaMayuscula('pythON'));   //  python
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cambiarMinusculaMayuscula(10001));   //  Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
