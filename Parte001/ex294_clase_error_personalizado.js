// Ejercicio 294: Crear una clase de error personalizado heredando de Error.

class DivisionEntreCeroError extends Error{
    constructor(mensaje){
        super(mensaje);
    }
}

function dividir(a, b){
    try{
        if (b != 0){
            return a/b;
        }

        throw new DivisionEntreCeroError('La división entre cero no está permitida');
    } catch(err){
        throw(err);
    }
}

try{
    dividir(5, 0);
} catch(error){
    console.log(error);
}
