const imgCarrito = document.getElementById("divCarrito");
const divPrecio = document.querySelector('#precioTotal')
const tableBody = document.querySelector(".tableBody")
const total = document.querySelector(".total")
const botonesQuitar = document.querySelectorAll(".quitar")
const botonFinalizar = document.querySelector(".finalizar")
const mensaje = document.querySelector("p.mensaje")

const productoCarrito = JSON.parse(localStorage.getItem('miCarrito')) || []
if (productoCarrito) {
    armarFilaHTML()
}
// AGREGAR ⛔👇
actualizarCarrito()
// 👆 VERIFICO SI HAY PRODUCTOS EN EL STORAGE, SI HAY LLAMO A LA FUNCIÓN "armarFilaHTML()"



// 👇 RENDERIZA A "PRODUCTOCARRITO, QUE TIENE LO ALMACENADO EN EL STORAGE"
function armarFilaHTML() {
    tableBody.innerHTML = ''
    const prodTable = document.createElement('div')
    productoCarrito.forEach((prod) => {
        prodTable.innerHTML +=
            `<tr>
    <img src=${prod.imagen} width=150 height=150>
    <td>${prod.nombre}</td>
    <td>$ ${prod.precio * prod.cantidad} ---- (${prod.cantidad})</td>
    <td><button onclick="activarClickEnBotonesQuitar(${prod.codigo})"class="quitar button btn">Quitar</button></td>
    </tr>`
        // LLAMO A LA FUNCION PARA QUITAR PRODUCTOS 👆 Y LE PASO EL ID DEL PRODUCTO SELECCIONADO

        tableBody.appendChild(prodTable)
    })
    incluirTotal()
}

// SE RECIBE EL ID 👇 Y SE HACE LA EVALUACION CORRESPONDIENTE, LUEGO SE APLICA SPLICE PARA QUITARLO DEL CARRITO

function activarClickEnBotonesQuitar(id) {
    let productoEliminado = productoCarrito.find((producto) => producto.codigo === id)
    if (productoEliminado) {
        const posicion = productoCarrito.indexOf(productoEliminado)
        productoCarrito.splice(posicion, 1)
        armarFilaHTML()
        Swal.fire({
            icon: 'error',
            title: 'Eliminado',
        })
        localStorage.setItem('miCarrito',JSON.stringify(productoCarrito))
        // AGREGAR ⛔👇
        actualizarCarrito()
    }
}

// 👇 FUNCION QUE OPERA LA CANTIDAD, LA MISMA ESTA INVOCADA EN OTRAS FUNCIONES DE MANERA QUE CUANDO CAMBIE 
// EL PRECIO, AL ELIMINAR PRODUCTOS, SE VUELVA A ACTUALIZAR
function incluirTotal() {
    let cont = 0
    productoCarrito.forEach((prod) => {
        cont += prod.precio * prod.cantidad
    })

    divPrecio.innerHTML = `Total: $${cont}`
}

// 👇 A ESTA FUNCION  LE AGREGUÉ QUE SE BORRE EL PRECIO, LOS PRODUCTOS DEL DOM Y SE LIMPIE EL STORAGE
// EN CASO DE QUE SE FINALICE LA COMPRA
const activarClickEnBotonFinalizar = () => {
    botonFinalizar.addEventListener("click", () => {
        if (productoCarrito.length > 0) {
            localStorage.clear()
            // AGREGAR ⛔👇
            actualizarCarrito()
            mostrarMensaje("¡Gracias por tu compra! Volvé pronto.")
            tableBody.innerHTML = ""
            divPrecio.innerHTML = ""
            console.log(localStorage)

        } else {
            mostrarMensaje("Tu carrito está vacío. Agrega productos para realizar una compra.")
            // AGREGAR ⛔👇
            actualizarCarrito()

        }
    })
}

activarClickEnBotonFinalizar()

const mostrarMensaje = (msg) => {
    mensaje.textContent = msg
}

// AGREGAR ⛔👇
function actualizarCarrito() {
    let sumaCantidad=0
    const carrito = JSON.parse(localStorage.getItem("miCarrito"));
    if(carrito){
        carrito.forEach((prod)=>{
            sumaCantidad+=prod.cantidad
            return sumaCantidad
        })
    }

    // if(sumaCantidad <= 0)imgCarrito.innerHTML = `<h3>No hay productos en el carrito</h3>`
    // if(sumaCantidad>0)imgCarrito.innerText = `${sumaCantidad}`;

    sumaCantidad <= 0 ? imgCarrito.innerHTML = `<h3>No hay productos en el carrito</h3>` :
    sumaCantidad > 0 ? imgCarrito.innerText = `${sumaCantidad}`: null

    
  }
  
