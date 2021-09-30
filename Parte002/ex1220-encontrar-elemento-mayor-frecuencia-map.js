// Ejercicio 1220: Usar una función personalizada para encontrar el elemento más frecuente de un arreglo usando un objeto de tipo Map.

function encontrarElementoMasFrecuente(datos) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento debe ser un arreglo.');
    }

    let conteo = new Map();

    for (const e of datos) {
        if (conteo.has(e)) {
            conteo.set(e, conteo.get(e) + 1);
        } else {
            conteo.set(e, 1);
        }
    }

    let mayorConteo = 0;
    let dato = null;
    let llaves = Object.keys(conteo);

    for(const [k, v] of conteo) {
        if (v > mayorConteo) {
            dato = k;
            mayorConteo = v;
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
