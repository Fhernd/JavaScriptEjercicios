// Ejercicio 239: Invocar una función IIFE una vez se cargue un documento HTML.

// IIFE -> Inmediately Invoked Function Expresion

(function(){
    alert('La página se ha cargado.');

    document.body.style.backgroundColor = 'gray';
})();
