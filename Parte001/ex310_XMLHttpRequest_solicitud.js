// Ejercicio 310: Creación de una solicitud asíncrona con un objeto XMLHttpRequest.

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = () => {
    if (this.readyState == 4 && this.status == 200){
        console.log(xhttp.responseText);
    }
};

xhttp.open('GET', 'https://randomuser.me/api/?results=10', true);
xhttp.send();
