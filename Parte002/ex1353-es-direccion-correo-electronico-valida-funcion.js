// Ejercicio 1353: Verificar si un dato dado corresponde con una dirección de email.

function esEmail(dato) {
    let patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return patron.test(dato);
}

console.log(esEmail('john@mail.co'));   // true
console.log(esEmail('john@gmail.co'));   // true
console.log(esEmail('john@yahoo.co'));   // true
console.log(esEmail('john@outlook.co'));   // true
console.log(esEmail('john - ortiz@outlook.co'));   // false
console.log(esEmail('johnortiz@outlook#.com'));   // false
console.log(esEmail('johnortiz@outlook .com'));   // false
