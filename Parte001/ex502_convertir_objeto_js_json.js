// Ejercicio 502: Filtrar la conversión de un objeto JavaScript a formato JSON.

function convertirBooleanosANumeros(llave, valor){
    if (typeof valor == 'boolean'){
        if (valor){
            valor = 1;
        } else {
            valor = 0;
        }
    }

    return valor;
}

let persona = {id: 1001,
    nombre: 'Edward',
    esProgramador: true,
    tieneHijos: false,
    email: 'edw@mail.co'};

let personaJson = JSON.stringify(persona, convertirBooleanosANumeros);

console.log(personaJson);
