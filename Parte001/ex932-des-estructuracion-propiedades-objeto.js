// Ejercicio 932: Usar la des-estructuración para acceder a las propiedades de un objeto.

class Persona {
    constructor(documento, nombres, email)  {
        this.documento = documento;
        this.nombres = nombres;
        this.email = email;
    }
}

let andrea = new Persona(123456, 'Andrea Ramírez', 'andrea@mail.co');
console.log(andrea);

console.log();

// let documento = andrea.documento;
// let nombres = andrea.nombres;
// let email = andrea.email;
// console.log(documento, nombres, email);

console.log();

// EMCAScript 2015 (ES6):
let {documento: andreaDocumento, nombres: andreaNombres, email: andreaEmail} = andrea;
console.log(andreaDocumento, andreaNombres, andreaEmail);
