// Ejercicio 290: Uso de la sentencia try...catch para gestionar errores.

try{
    let numeros = new Array(-1);
} catch(RangeError){
    console.log('Se ha producido un error.');
}
