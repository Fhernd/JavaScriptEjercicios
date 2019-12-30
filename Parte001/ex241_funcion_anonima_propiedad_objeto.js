// Ejercicio 241: Crear una función anónima como propiedad de un objeto literal.

let radio = {marca: 'Sanyo',
    modo: 'FM',
    digital: true,
    encendido: false,
    encender: function(){
        this.encendido = true;
    },
    apagar: function(){
        this.encendido = false;
    }};

console.log(radio);

radio.encender();
console.log(radio.encendido);

radio.apagar();
console.log(radio.encendido);
