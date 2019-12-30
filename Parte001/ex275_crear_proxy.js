// Ejercicio 275: Crear un objeto proxy usando la clase Proxy.

let handler = {
    get: function(target, name){
        return name in target ? target[name] : 'No existe la propiedad: ' + name;
    }
};

let persona = {nombre: 'Edward', apellido: 'Ortiz', edad: 29};

let proxy = new Proxy(persona, handler);

console.log(proxy.nombre);
console.log(proxy.apellido);
console.log(proxy.edad);
console.log(proxy.email);
