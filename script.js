const carrito = document.getElementById('carrito');
const elementos1 = document,getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const lista = document,querySelector('#lista_carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito')

cargarEventListeners();

function cargar EventListener (){
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    carrito.addEventListener('click',eliminarElemento)
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}
function leerDatosElemento(elemento){
    const infoelemento ={
        imagen: elemento.querySelector('img').src
        titulo: elemento.querySelector('h3').textContent
        precio: elemento.querySelector('precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoelemento)
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = 
}

