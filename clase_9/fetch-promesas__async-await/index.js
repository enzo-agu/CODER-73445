// EJEMPLO 1 PROMESAS 🚀

// const eventoFuturo=(resp)=>{
//     return new Promise((res,rej)=>{

//         if(resp){
//             res('Promesa resuelta exitosamente')
//         }
//         else{
//             rej('Promesa rechazada')
//         }

//     })
// }


// console.log(eventoFuturo(true));
// console.log(eventoFuturo(false));


// const eventoFuturo2=(resp)=>{
//     return new Promise((res,rej)=>{

//        setTimeout(() => {
//         resp ? res('Exito') : rej('Rechazo')
//        }, 2000);

//     })
// }


// eventoFuturo2(true)
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>{
//     console.log('Se ejecuta siempre');
// })
















// EJEMPLO APLICADO ✅
// let productos=[]

// const BD= [
//     {
//         id:1,
//         nombre:'Producto1',
//         precio:1000
//     },
//     {
//         id:2,
//         nombre:'Producto2',
//         precio:2000
//     },
//     {
//         id:3,
//         nombre:'Producto3',
//         precio:3000
//     }
// ]

// const pedirProductos=()=>{
//     return new Promise((res,rej)=>{
//             res(BD)       
//     })
// }

// const renderProductos=(arr)=>{
//     // console.log(arr)
//     arr.forEach(element => {
//        let div=document.createElement('div')
//        div.innerHTML=`
//        <h2>${element.id}</h2>
//        <h3>${element.nombre}</h3>
//        <h4>${element.precio}</h4>
//        ` 
//        document.body.appendChild(div)
//     });
// }


// pedirProductos()
// .then((res)=>{
//     productos=res
//     renderProductos(productos)
// })
// .catch(err=>console.log(err))
// .finally(()=>console.log('Proceso finalizado'))


// EJEMPLO 2 SWAPI 🚀
// API CON PERSONAJES
// const urlSwapi='https://swapi.dev/api/'
// const urlSwapiPlanets='https://swapi.dev/api/planets/'
// const id=1
// const urlSwapiPeople = `https://swapi.dev/api/people/${id}`

// let arraySWAPI=[]

// fetch(urlSwapi)
// .then((resp)=>resp.json())
// .then(data=>{
//     console.log(data)
//     arraySWAPI=data
//     peopleSwapi(arraySWAPI)

//     const div=document.createElement('div')
//     div.innerHTML=`
//     <h1>${data.name}</h1>
//     `
//     document.body.appendChild(div)
// })


// ⛔👇 FUNCION PARA TODOS LOS PERSONAJES
// const peopleSwapi = (personajes) =>{

//     personajes.results.map((pers)=>{
//         const div=document.createElement('div')
//         div.innerHTML=`
//         <h2>${pers.name}</h2>
//         <h3>${pers.height}</h3>
//         `
//         document.body.appendChild(div)
//     })

// } 


// EJEMPLO 3 ASYNC-AWAIT 🚀
// const lista = document.querySelector('#listado')

// const pedirPosts1 = async () => {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await resp.json()
   
//     data.forEach((post) => {
//         const li = document.createElement('li')
//         li.innerHTML = `
//             <h4>${post.title}</h4>
//             <p>${post.body}</p>
//         `
//         lista.append(li)
//     })
// }

// async function pedirPosts2() {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await resp.json()
//     console.log(data);
//     data.forEach((post) => {
//         const li = document.createElement('li')
//         li.innerHTML = `
//             <h4>${post.title}</h4>
//             <p>${post.body}</p>
//         `
//         lista.append(li)
//     })
    
// }

// pedirPosts1()
// pedirPosts2()
