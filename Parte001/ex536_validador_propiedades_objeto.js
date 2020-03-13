// Ejercicio 536: Validar con un Proxy las propiedades de un objeto al momento de su creación.

function validadorPropiedades(objeto){
    return new Proxy(objeto, {
        set: function(objeto, propiedad, valor){
            if(propiedad == 'precio'){
                if(typeof valor != 'number'){
                    throw new TypeError('La propiedad `precio` debe ser un número.');
                } else if (valor <= 0){
                    throw new RangeError('El precio debe ser un valor positivo.');
                }
            } else if (propiedad != 'nombre'){
                throw new ReferenceError(`La propiedad ${propiedad} no es válida para este objeto.`);
            }
            objeto[propiedad] = valor;
        }
    })
}

function Producto(){
    return validadorPropiedades(this);
}

try {
    let pantalla = new Producto();
    pantalla.nombre = 'Monitor LG 34"';

    // pantalla.marca = 'LG'; // Genera excepción ReferenceError

    pantalla.precio = 299;

    // pantalla.precio = 0; // Genera excepción RangeError

    // pantalla.precio = '299'; // Genera excepción TypeError

    console.log(pantalla);
} catch (error) {
    console.log("ERROR -> ", error.message);
}
