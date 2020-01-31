// Ejercicio 412: Crear un descriptor de acceso y modificación para una propiedad de un objeto.

let datos = {};
let asignatura = 'Informática';

Object.defineProperty(datos, 'clase', {
    get: function () {return asignatura},
    set: function (valor) {asignatura = valor},
    enumerable: true,
    configurable: true
});

console.log(datos);
console.log(datos.clase);
asignatura = 'Computación';
console.log(datos.clase);
