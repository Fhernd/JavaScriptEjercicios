// Ejercicio 661: Crear una variable global sobre el objeto this.

console.log(this);

console.log();

this['version'] = '1.0.0';
this['edicion'] = 'Ultimate';

console.log(this);

console.log();

Object.keys(this).forEach((p) => {
    console.log(p, this[p]);
});

console.log();

Object.keys(this).forEach(function(p) {
    console.log(p, this[p]);
});
