// Ejercicio 276: Usar un proxy para la validación de los valores de propiedades.

let validador = {
    set: function(objeto, propiedad, valor){
        if(propiedad === 'edad'){
            if(!Number.isInteger(valor)){
                throw new TypeError('La edad no es un valor numérico.');
            }

            if(valor > 130){
                throw new RangeError('La edad no debe superar los 130 años.');
            }
        }

        objeto[propiedad] = valor;

        return true;
    }
};

let persona = new Proxy({}, validador);
persona.nombre = 'Daniela';
persona.apellido = 'Ortiz';

console.log(persona);

// Genera excepción TypeError:
// persona.edad = 'abc';

// Genera excepción RangeError:
// persona.edad = 150;

persona.edad = 35;

console.log(persona);
