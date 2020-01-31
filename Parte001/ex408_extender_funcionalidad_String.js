// Ejercicio 408: Agregar más funcionalidad al objeto String por medio de prototipado.

String.prototype.exclamarFrase = function() {
    if (this.length == 0){
        return this;
    }

    return `¡${this}!`;
};

let frase = 'JavaScript es tremendo';
console.log(typeof frase);
console.log(frase);
console.log(frase.exclamarFrase());
