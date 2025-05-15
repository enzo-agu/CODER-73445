// EJEMPLO 1 ACCESO AL DOM 🚀
// console.log(document);
// console.log(document.head);
// console.log(document.body);

// console.dir(document)
// console.dir(document.head)

// console.log(document.body.children[0].textContent='esto es un h1')


// EJEMPLO 2 BYID() 🚀

// const fechaHoy=new Date()
// console.log(fechaHoy);

// let div= document.getElementById('app')
// let parrafo=document.getElementById('parrafo1')
// let contenidoFecha=fechaHoy




// parrafo.innerHTML=`
// <h1> La fecha de hoy es 👇</h1>
// ${contenidoFecha}
// `
// console.log(div);
// console.log(parrafo);




// EJEMPLO 3 CLASSNAME 🚀

// let paises = document.getElementsByClassName('paises')

// console.log(paises);

// console.log(paises[0]);
// console.log(paises[1]);
// console.log(paises[2]);





// EJEMPLO 4 TAGNAME 🚀

// let contenedores= document.getElementsByTagName('div')
// // console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerHTML= '<h3>CAMBIO</h3>');
// console.log(contenedores[2].innerHTML);




// EJEMPLO 5 TAGNAME Y CLASSNAME 🚀

// let paises = document.getElementsByClassName('paises')
// let contenedores = document.getElementsByTagName('div')
// console.log(paises,contenedores);

// for (const pais of paises){
//     console.log(pais.innerHTML);
// }

// for (const contenedor of contenedores){
//     console.log(contenedor.innerHTML);
// }





// EJEMPLO 6 🚀
// let titulo = document.getElementById('titulo')
// console.log(titulo.innerHTML);
// titulo.innerText=' Cambio de palabras'




// EJEMPLO 7 🚀
// let contenedor = document.getElementById('contenedor')
// contenedor.innerHTML = `
// <h2>Hola mundo </h2>
// <p> lorem ipsum </p>

// `




// EJEMPLO 8 🚀

// let parrafo = document.createElement('p')
// parrafo.innerHTML='<h2>Hola mundo</h2>'
// document.body.append(parrafo)




// EJEMPLO 9 🚀
// let parrafo = document.getElementById('parrafo1')
// // console.log(parrafo.textContent);
// parrafo.remove()

// let paises= document.getElementsByClassName('paises')
// console.log(paises[0].textContent);
// console.log(paises[1].textContent);

// paises[0].remove()
// console.log(paises[0]);




// EJEMPLO 10 🚀
// let nombre = document.getElementById('nombre')
// let edad = document.getElementById('edad')
// console.log(nombre,edad);

// nombre.value = 'Enzo'
// edad.value = 36




// EJEMPLO 11 🚀

// let padre = document.getElementById('personas')
// let personas = [ 'Homero' , ' Marge', 'Lisa', 'Bart',
//     'Maggie'
//   ]

//   for ( const persona  of personas){
//     let li = document.createElement('li')
//     li.innerHTML = persona
//     padre.appendChild(li)
//   }




// EJEMPLO 12 🚀

// let parrafo = document.querySelector('#contenedor p')
// parrafo.textContent = 'escribiendo'
// console.log(parrafo);





// INYECCION  👇 A TRAVÉS DEL DOM CON DOCUMNET.BODY.APPEND()
// const productos = [
//   {
//     id: 1,
//     nombre: "remera",
//   },
//   {
//     id: 2,
//     nombre: "pantalon",
//   },
//   {
//     id: 3,
//     nombre: "buzo",
//   },
// ];

// for (const prenda of productos) {

//     let div = document.createElement('div')
//     div.innerHTML=`
//     <h3> ID:  ${prenda.id}</h3>
//     <h4> Producto: ${prenda.nombre}  </h4>
//     `

//     document.body.appendChild(div)
    
// }

// INYECCION  👆 A TRAVÉS DEL DOM CON DOCUMNET.BODY.APPEND()


// EJEMPLO 13 🚀 QUERYSELECTORALL()

// let btn = document.querySelectorAll('.btn')
// console.log(btn);

// btn[0].textContent = ' BOTON  1'
// btn[1].textContent = ' BOTON  2'
// btn[2].textContent = ' BOTON  3'

// let inputs = document.querySelectorAll('input')
// let labels = document.querySelectorAll('label')

// const OPCION_1 = labels[0].textContent = 'OPCION 1'
// const OPCION_2 = labels[1].textContent = 'OPCION 2'

// // let opcionUsuario= Number(prompt('¿Qué opción desea elegir? coloque 1 o 2'))

// console.log(inputs);
// console.log(inputs[1].checked = true);

// let div = document.createElement('div')
// let parrafo = document.createElement('p')

// if(opcionUsuario === 1 ){
//     inputs[0].checked = true
//     parrafo.innerHTML=`
//     <h3>Usted eligió la ${OPCION_1}</h3>
//     `
//     div.append(parrafo)
//     inputs[1].checked = false
// }
// else if(opcionUsuario === 2){
//     inputs[1].checked = true
//     parrafo.innerHTML = `
//     <h3> Usted eligió la ${OPCION_2}</h3>
//     `
//     div.append(parrafo)
//     inputs[0].checked = false

// }
// else{
//     div.innerHTML=`
//     <h2>Usted no eligió una opción válida</h2>
//     `
//     document.body.append(div)
//     inputs[0].checked = false
//     inputs[1].checked = false
// }





