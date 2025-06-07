let productos=[]
// TRAIGO LOS PRODUCTOS CON "FETCH()" DEL JSON
fetch('../data/productos.json')
.then(resp=>resp.json())
.then((data)=>{
    productos=data
    cargarProductos(productos)
})

const carrito = []

const container = document.querySelector(".contenedor-cajas")
// 👆 ESTA CLASE SOLO EXISTE EN INDEX.HTML POR ESO SE TOMA SOLO ACA

// 👇CARGA DE PRODUCTOS

function cargarProductos(array) {
    container.innerHTML = ""
    array.forEach((producto) => {
        container.innerHTML += `<div class="caja">
        <img class="d-block" src="${producto.imagen}" alt="${producto.nombre}">
        <h3 class="titulo-servicios text-center">${producto.nombre}</h3>
        <p class="parrafo-servicios text-center">${producto.descripcion}</p>
        <p class="parrafo-servicios text-center">$${producto.precio}</p>
        <button onclick="agregarProductos(${producto.codigo})"  class="button-carrito button-outline">Agregar</button>
    </div>`

        // LLAMO A LA FUNCION PARA AGREGAR PRODUCTOS 👆 Y LE PASO EL ID DEL PRODUCTO SELECCIONADO
    })
}

// cargarProductos()


function agregarProductos(codigo) {
    console.log(codigo);
    const productoElegido = productos.find((producto) => producto.codigo === codigo)
    const productoEnCarrito=carrito.find(producto => producto===productoElegido)

    // VERIFICO SI EXISTE EL PRODUCTO Y SI EXISTE SOLO SUMO LA CANTIDAD

    if(productoEnCarrito){
        productoEnCarrito.cantidad++
        localStorage.setItem('miCarrito', JSON.stringify(carrito))
        console.log(localStorage);
        return
    }
    else{
        carrito.push(productoElegido)
        localStorage.setItem('miCarrito',JSON.stringify(carrito))
    }

}
