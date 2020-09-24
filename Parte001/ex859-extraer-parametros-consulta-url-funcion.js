// Ejercicio 859: Crear una función para extraer los parámetros de consulta de una URL.

// {p1: v1, p2: v2, ..., pn: vn}
// https://ortizol.com/pagina?prop1=v1&prop2=v2&prop3=v3

function extraerParametros(url) {
    if (typeof url != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    // Pendiente: validar si una cadena de caracteres corresponde con una URL.

    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, p) => ((a[p.slice(0, p.indexOf('='))] = p.slice(p.indexOf('=') + 1)), a), {});
}

try {
    console.log(extraerParametros('https://ortizol.com/pagina?prop1=v1&prop2=v2&prop3=v3'));
    // {prop1: v1, prop2: v2, prop3: v3}
} catch (e) {
    console.log(`Error: ${e.message}`);
}
