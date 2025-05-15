// EJEMPLO 1 ADDEVENTLISTENER 🚀

// let btn = document.getElementById('btnPrincipal')
// btn.addEventListener('click', ()=>{
//     console.log('Evento click');
// } )


// btn.addEventListener('click', respuestaClick)

// function respuestaClick(){
//     console.log('Evento click');
// }




// EJEMPLO 2 PREFIJO ON + NOMBRE DEL EVENTO 🚀

// let btn = document.getElementById('btnPrincipal')


// btn.onclick = () => {
//     console.log('Evento click, opción 2')  
// } 

// btn.onclick = function(){
//     console.log('Evento click, opción 2 con uso de "function" ');
// }



// 👈 ESTA EN EL HTML - EJEMPLO 3 🚀 

// EJEMPLO 4 EVENTOS DE MOUSE 🚀

// let btn = document.getElementById('btnPrincipal')

// let input= document.getElementById('input1')

// btn.onclick = () =>{
//     console.log('click');
// }

// btn.addEventListener('mousedown', ()=>{
//     alert('Mouse down')
// })

// btn.addEventListener('mouseup', ()=>{
//     alert('Mouse up')
// })

// input.addEventListener('mouseover', ()=>{
//     alert('Mouse over')
// })

// input.addEventListener('mouseout', ()=>{
//     alert('Mouse out')
// })

// btn.addEventListener('mousemove', ()=>{
//     alert('Mouse move')
// })




// EJEMPLO 5 EVENTOS DE TECLADO 🚀

// let inputNombre = document.getElementById('nombre')
// let inputEdad = document.getElementById('edad')

// inputNombre.onkeyup = () => {
//     alert('key up')
// }

// inputEdad.onkeydown = () =>{
//     alert('key down')
// }

// inputNombre.onchange = () =>{
//     console.log('Cambio de nombre');
// }

// inputEdad.onchange = () =>{
//     console.log('Cambio de edad');
// }

// inputNombre.addEventListener('input', ()=>{

//     console.log(inputNombre.value);
    
// })

// inputEdad.addEventListener('input', ()=>{

//     console.log(inputEdad.value);
    
// })




// EJEMPLO 6 EVENTOS DE FORMULARIO 🚀

// let miFormulario = document.getElementById('formulario')
// let inputNombre = document.getElementById('inputNombre')
// let inputEmail = document.getElementById('inputEmail')
// miFormulario.addEventListener('submit', validarFormulario)

// const personas= []

// function validarFormulario(e){
//     e.preventDefault()

//     console.log(inputNombre.value, inputEmail.value);

//     const userNuevo={
//         nombre : inputNombre.value,
//         email: inputEmail.value
//     }

//     personas.push(userNuevo)
    
//     console.log('Formulario enviado');
//     miFormulario.reset()
//     console.log(personas);
//     localStorage.setItem('personas', JSON.stringify(personas))
// }


// EJEMPLO 7 FORMULARIO - VALIDACIÓN DE CAMPOS - PREVENT DEFAULT 🚀

// let miFormulario = document.getElementById('formulario')
// miFormulario.addEventListener('submit', validarFormulario)

// let inputNombre= document.getElementById('inputNombre')
// let inputEmail=document.getElementById('inputEmail')

// const usuariosArray=[]

// function validarFormulario(event){

//     const regexEmail =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/
//     const regexNombre =  /^\S.*$/

//     event.preventDefault()

//     let formulario = event.target

//     // VALIDACION DE CAMPOS 
    
//     if(!regexNombre.test(inputNombre.value) || inputNombre.value.length < 3){
//         alert('El nombre debe tener al menos 3 caracteres / no puede haber espacios vacíos')
//         formulario.reset()
//         return           
//     }

//     if(!regexEmail.test(inputEmail.value)){
//         alert('Mail no válido')
//         formulario.reset()
//         return
//     }

//     const nuevoUsuario = {
//         nombre:inputNombre.value,
//         email: inputEmail.value
//     }

//     usuariosArray.push(nuevoUsuario)
//     console.log(usuariosArray);
//     formulario.reset()

//     // 👇 FUNCION PARA MOSTRAR USUARIOS EN EL DOM 
//     usuariosDOM()

// }

// function usuariosDOM(){
//     let section = document.getElementById('listaUsuarios')
//     section.innerHTML = ''
//     usuariosArray.forEach((usuario)=>{

//         let div = document.createElement('div')
//         div.innerHTML=`

//         <h2><strong>Nombre:</strong>${usuario.nombre}</h2>
//         <h3><strong>Email:</strong>${usuario.email}</h3>
        
//         `
//         section.appendChild(div)

//     })

// }
