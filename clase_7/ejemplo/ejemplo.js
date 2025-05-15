const frutas = ['Ananá', 'Banana', 'Durazno', 'Kiwi', 'Manzana', 'Papaya', 'Pera'];

function cargarDOM(){
   
    const titulo = document.getElementById('titulo');
    const listado = document.getElementById('listado');

    titulo.innerText = 'www.mandafruta.com';

    frutas.forEach(fruta => {

        const li = document.createElement('li');
        li.textContent = fruta;
        listado.appendChild(li)
        
    });


}

cargarDOM()