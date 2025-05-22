// EJEMPLO 1 STO 🚀
// Permite tareas asincrónicas

// setTimeout(()=>{

//     console.log('Ejecutando sto');

// },3000)

// EJEMPLO 2 STO 🚀

// console.log('inicio del proceso');

// setTimeout(()=>{

//     console.log('mitad del proceso');

// },2000)

// setTimeout(()=>{

//     console.log('3/4 del proceso');

// },0)

// console.log('fin del proceso');


// EJEMPLO 3 FOR () 🚀

// for(const element of 'mundo'){

//     setTimeout(() => {

//         console.log(element);
        
//     }, 2000);
// }


// EJEMPLO 4 SETINTERVAL - CLEAN INTERVAL 🚀

// setInterval(() => {

//     console.log('Cada segundo');
    
// }, 1000);

// let counter = 0

// function ejecutar (){

//     const refInterval = setInterval(() => {

//         counter++
//         console.log(`Contador ${counter}`);

//         if(counter >=4){
//             clearInterval(refInterval)
//         }
//     }, 1000);

// }

// setInterval(()=>{

//     ejecutar()

// },7000)

// EJEMPLO 5 FETCH 🚀

// let arrayJSON = []

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(resp=>resp.json())
// .then((resp)=>{

//     console.log(resp);
//     arrayJSON=resp
//     mostrarJSON(arrayJSON)

// })


// const mostrarJSON = (array) =>{

//     array.slice(0,3).map((obj)=>{

//         const div = document.createElement('div');
//         div.innerHTML = `
//         <h4>${obj.userId}</h4>
//         <h2>${obj.title}</h2>
//         <h3>${obj.body}</h3>
//         `
//         document.body.appendChild(div)

//     })

// }

// EJEMPLO FETCH LOCAL 🚀

// let arrayJSON = []


// fetch('./data.json')
// .then(resp=>resp.json())
// .then((resp)=>{

//     console.log(resp);
//     arrayJSON=resp
//     mostrarJSON(arrayJSON)

// })


// const mostrarJSON = (array) =>{

//     array.map((obj)=>{

//         const div = document.createElement('div');
//         div.innerHTML = `
//         <h4>${obj.nombre}</h4>
//         <h2>${obj.precio}</h2>
//         <h3>${obj.id}</h3>
//         `
//         document.body.appendChild(div)

//     })

// }












