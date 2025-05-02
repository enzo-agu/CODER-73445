// EJEMPLO 1 🚀

// localStorage.clear();
// localStorage.setItem('Bienvenida', 'Hola');
// localStorage.setItem('valorBoolean', true);
// localStorage.setItem('EsUnNumero', 100)

// console.log(localStorage);


// EJEMPLO 2 🚀

// console.log(localStorage.getItem('Bienvenida'))
// console.log(localStorage.getItem('valorBoolean'))
// console.log(localStorage.getItem('EsUnNumero'))


// EJEMPLO 3 🚀


// sessionStorage.setItem('Bienvenida', 'Hola');
// sessionStorage.setItem('valorBoolean', true);
// sessionStorage.setItem('EsUnNumero', 100)


// EJEMPLO 4 🚀

// localStorage.clear()
// console.log(localStorage);


// EJEMPLO 5 🚀

// const nombre1 = {

//     id:1,
//     codigo:100

// }

// localStorage.setItem('nombreUno', nombre1)
// console.log(localStorage);


// EJEMPLO 6 🚀

// const nombre1 = {

//     id:1,
//     codigo:100

// }

// const enJson = JSON.stringify(nombre1)

// localStorage.setItem('nombreUno', enJson)
// console.log(localStorage);


// EJEMPLO 7 🚀

// const nombre1 = {

//     id:1,
//     codigo:100

// }

// const enJson = JSON.stringify(nombre1)

// localStorage.setItem('nombreUno', enJson)
// console.log(localStorage);


// const data = localStorage.getItem('nombreUno')

// const enObjeto= JSON.parse(data)

// console.log(enObjeto);

// EJEMPLO 8 🚀

const prodCelulares = [
    {
        nombre : 'Samsung',
        precio:500000
    },
    {
        nombre : 'Nokia',
        precio:400000
    },
    {
        nombre : 'Motorola',
        precio:600000
    }
]

localStorage.setItem('listaProductos', JSON.stringify(prodCelulares) );


class Producto {
    constructor(objeto){
        this.nombre = objeto.nombre;
        this.precio = objeto.precio;
    }

    sumarIva(){
        return this.precio = this.precio * 1.21 ;
    }

    nombreCel(){
        return this.nombre;
    }

}

const almacenados = JSON.parse(localStorage.getItem('listaProductos'));

const productos = [];


for (const objeto of almacenados) {

    productos.push(new Producto(objeto))

    
}

for (const celular of productos) {

    console.log(celular.nombreCel());
    console.log(celular.sumarIva());
    console.log('-------------------------------------');
    
}








