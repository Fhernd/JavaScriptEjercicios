// Ejercicio 292: Lanzar una nueva excepción dentro de un bloque catch.

function funcion(){
    try{
        return 5 / a;
    } catch(error){
        throw(error);
    }
}

try{
    funcion();
} catch(error){
    console.log(error);
}

console.log("...");
