// Ejercicio 501: Convertir propiedades numéricas de una cadena JSON en valores lógicos.

let personaJson = `{"id": 1001, "nombre": "Edward", "esProgramador": 1, "tieneHijos": 0, "email": "edw@mail.co"}`;

let persona = JSON.parse(personaJson, function(k, v){
    if(typeof v == 'number'){
        if(v == 0){
            v = false;
        } else if (v == 1) {
            v = true;
        }
    }

    return v;
});

console.log(persona);
