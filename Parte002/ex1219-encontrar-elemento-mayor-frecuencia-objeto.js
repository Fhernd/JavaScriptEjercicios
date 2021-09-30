// Ejercicio 1219: Usar una función personalizada para encontrar el elemento más frecuente de un arreglo.

function encontrarElementoMasFrecuente(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    let conteo = {};

    for (const e of datos) {
        if (conteo[e]) {
            conteo[e] += 1;
        } else {
            conteo[e] = 1;
        }
    }

    let mayorConteo = 0;
    let dato = null;
    let llaves = Object.keys(conteo);

    for(let i = 0; i < llaves.length; ++i) {
        if (conteo[llaves[i]] > mayorConteo) {
            dato = llaves[i];
            mayorConteo = conteo[llaves[i]];
        }
    }

    return dato;
}

let datos = ['A', 'B', 'A', 'F', 'Z', 'A', 'C', 'D'];

try {
    console.log(encontrarElementoMasFrecuente(datos));  // 'A'
} catch (e) {
    console.log(`Error: ${e.message}`);
}
