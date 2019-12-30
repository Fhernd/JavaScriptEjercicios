// Ejercicio 287: Asociar un evento de click a un elemento button.

(() =>{
    let btnCambiarColorFondo = document.getElementById('btnCambiarColorFondo');

    btnCambiarColorFondo.addEventListener('click', () => {
        document.body.style.backgroundColor = 'gray';
    }, false);
})();
