// EJEMPLO 1  🚀

// function mayorQue(numero){

//     return (numeroMayorQueDiez)=> numeroMayorQueDiez > numero

// }

// let mayorQueDiez = mayorQue(10)
// console.log(mayorQueDiez(12))
// console.log(mayorQueDiez(8))




// EJEMPLO 2  FN POR PARAM 🚀

// const arrayNumeros= [10,20,30,40];

// function porCadaUno(array, consola){

//     for (const element of array) {

//         consola(element)
        
//     }

// }

// porCadaUno(arrayNumeros, console.log)


// EJEMPLO 3 FIND  🚀

// const cursos = [
//     {
//         nombre:'Diseño UX/UI' , precio : 100000
//     },
//     {
//         nombre:'AWS' , precio : 55000
//     }
// ]

// const busqueda = cursos.find( (curso)=> curso.nombre === 'AWS' )

// console.log(busqueda);


// EJEMPLO 4 FILTER  🚀

// const autos = [
//     {
//         nombre:'Volkswagen' , precio : 1000000
//     },
//     {
//         nombre:'Volkswagen' , precio : 1500000
//     },
//     {
//         nombre:'Ford' , precio : 20000000
//     },
//     {
//         nombre:'Renault' , precio : 25000000
//     },
// ]

// const filtroVolkswagen = autos.filter((auto)=>auto.nombre === 'Volkswagen')

// const filtroPorPrecio= filtroVolkswagen.find((auto)=>auto.precio < 15000000)


// EJEMPLO 5 SOME  🚀

// const autos = [
//     {
//         nombre:'Volkswagen' , precio : 1000000
//     },
//     {
//         nombre:'Volkswagen' , precio : 1500000
//     },
//     {
//         nombre:'Ford' , precio : 20000000
//     },
//     {
//         nombre:'Renault' , precio : 25000000
//     },
// ]

// const existe = autos.some((auto)=>auto.nombre === 'Renault')
// console.log(existe);


// EJEMPLO 6 MAP 🚀

// const autos = [
//     {
//         nombre:'Volkswagen' , precio : 1000000
//     },
//     {
//         nombre:'Volkswagen' , precio : 1500000
//     },
//     {
//         nombre:'Ford' , precio : 20000000
//     },
//     {
//         nombre:'Renault' , precio : 25000000
//     },
// ]

// const nombres = autos.map((auto)=>auto.nombre)
// // console.log(nombres);

// const autosRebajados = autos.map((auto)=> auto.precio - (auto.precio / 10) )

// console.log(autosRebajados);


// EJEMPLO 7 REDUCE 🚀

// const VI = 200

// const numeros = [100,50,30];
// const total = numeros.reduce((acc,num)=> acc - num, 200)

// // VI =100
// // VI = 50


// console.log(total);

// EJEMPLO 8 SORT 🚀

// const numeros=[40,1,5,200];
// console.log(numeros);

// let orden = numeros.sort()
// let descendente = numeros.sort((a,b)=>b - a)

// console.log(numeros.sort((a,b)=> a - b ));


// console.log(orden);
// console.log(descendente);

// const pok = [
//     {
//         nombre:'Pikachu', precio:10
//     },
//     {
//         nombre:'Charmander', precio:15
//     },
//     {
//         nombre:'Pidgey', precio:20
//     }
// ]

// const porPrecio = pok.sort((a,b)=>b.precio - a.precio)

// console.log(porPrecio);


// EJEMPLO 9 🚀

const productos = [
    {
        id:1, nombre:'Arroz', precio: 125
    },
    {
        id:2, nombre:'Arroz integral', precio: 70
    },
    {
        id:3, nombre:'Tostada', precio: 50
    },
    {
        id:4, nombre:'Flan', precio: 100
    }
]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado);

const existe = productos.some(producto => producto.nombre === 'Tostada')
console.log(existe);

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos);

const aumento = productos.map(producto => producto.precio * 0.10)
console.log(aumento);