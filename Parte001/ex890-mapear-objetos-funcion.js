// Ejercicio 890: Definir una función para mapear un conjunto de objetos a partir de una operación específica.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function mapearObjetos(objetos, funcion) {
    if (!Array.isArray(objetos)) {
        throw TypeError('El argumento «objetos» debe ser un arreglo.')
    }

    if (!objetos.every(o => esObjetoEstandar(o))) {
        throw TypeError('Todos los elementos del arreglo objetos deben ser objetos.');
    }

    if (typeof funcion != 'function') {
        throw TypeError('El argumento «funcion» debe ser una función.');
    }

    return Object.keys(objetos).reduce((a, k) => {
        a[k] = funcion(objetos[k], k, objetos);

        return a;
    }, {});
}

let personas = [{
    nombre: 'Edward', edad: 29
},
{
    nombre: 'Daniela', edad: 23
}];

try {
    console.log(mapearObjetos(personas, o => o.edad));
} catch (e) {
    console.log(`Error: ${e.message}`);
}
