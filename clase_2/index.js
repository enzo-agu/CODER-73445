// EJEMPLO 1 CONDICIONALES 🚀

// let nombre = prompt('Ingrese su nombre');
// alert(`Hola ${nombre}, bienvenido a nuestro servicio de prestamos`);
// alert(`Recuerde que para acceder debe ser mayor a 18 años`)

// const anioNacimiento = Number(prompt('Ingrese su año de nacimiento para saber su edad'));

// if((!Number(anioNacimiento) || anioNacimiento == '')){
//     console.log('Debe ingresar un dato numérico');
// }

// else if(anioNacimiento === 2007){
//     const mesNacimiento= Number(prompt('Ingrese el número correspondiente al mes en que nació'))

//     if(mesNacimiento >= 5){
//         console.log('Aún es menor de edad, debe esperar a ser mayor de 18 años');
//     }
//     else if(mesNacimiento === 4){

//         const fechaNacimiento = Number(prompt('Ingrese el número correspondiente a la fecha en que nació'));

//         if(fechaNacimiento == 8){
//             console.log('Feliz cumpleaños 🎉!');
//         }

//         else if(fechaNacimiento > 8 && fechaNacimiento <=30){
//             console.log('Debe esperar unos días hasta cumplir la mayoría de edad');
//         }

//         else{
//             console.log('Bienvenido');
//         }

//     }

//     else if(mesNacimiento === 1 && mesNacimiento <=3){

//         console.log('Bienvenido, usted es mayor 😎');

//     }

// }

// else if(anioNacimiento < 1955 ){
//     console.log('Debe ser menor a 70 años');
// }

// else if(anioNacimiento >= 2008 && anioNacimiento <= 2024){
//     console.log('Usted es menor de edad, no puede solictar préstamos');
// }
// else if(anioNacimiento >= 1954  && anioNacimiento <= 2005){

//     console.log('Bienvenido');

// }

// else if(anioNacimiento.toString().length >= 5 ){

//     console.log('No es un año válido');

// }

// else{
//     console.log('Ingrese un dato válido');
// }



// EJEMPLO 2 FOR 🚀

// const numeroIngresado = parseInt(prompt('Ingrese un número'))

// for (let index = 0; index <= 10; index++) {

//     console.log(`Suma ${index} + ${numeroIngresado} = ${index + numeroIngresado} `);

// }

// for (let index = 1; index <= 3; index++) {
//     const ingreseNombre = prompt('Ingrese su nombre');

//     alert('Turno N° ' + index + 'Nombre: ' + ingreseNombre)

// }



// EJEMPLO 3 FOR - CONTINUE 🚀

// for (let index = 1; index <=10 ; index++) {

//     if(index == 5){
//         continue
//     }

//     alert(index)

// }



// EJEMPLO 4 FOR - BREAK

// for (let index = 1; index <=10 ; index++) {

//     if(index == 5){
//        break
//     }

//     alert(index)

// }



// EJEMPLO 5 WHILE 🚀

// let entrada = prompt('Ingrese un dato');

// while (entrada != 'ESC') {

//     alert('El usuario ingresó: ' + entrada );

//     // EVALUA QUE NO SEA ESC

//     entrada = prompt('Ingrese un dato');

// }



// EJEMPLO 6 WHILE 🚀

// alert('Bienvenido a nuestro sitio web');
// let registro = prompt('Desea registrarse ? - Ingrese SI o NO ').toUpperCase();

// while (registro != 'SI'  && registro != 'NO') {

//     alert('Debe colocar SI o NO')

//     registro = prompt('Desea registrarse ? - Ingrese SI o NO ')

// }

// if(registro == 'SI'){
//     let nombre = prompt('Ingrese su nombre');
//     while(nombre == '' || nombre.length < 3 ){
//         alert('Ingrese un nombre válido');
//         nombre = prompt('Ingrese su nombre');
//     }

//     let claveNumerica = Number(prompt('Ingrese su clave numérica de 6 dígitos'));

//     while(!Number(claveNumerica) || claveNumerica.toString().length < 6){
//         alert('Ingrese una clave numérica válida')
//         claveNumerica = Number(prompt('Ingrese su clave numérica de 6 dígitos'));
//     }

//     alert('Usuario registrado con éxito');

// }



// EJEMPLO 7 DO WHILE 🚀

// let repetir = false;

// do {
//   alert("Esta web estará en mantenimineto");
//   let pregunta = prompt(
//     "Igualmente, tiene alguna consulta? Responderemos por mail"
//   ).toUpperCase();

//   if (pregunta == "SI") {
//     let mail = prompt("Indique su mail");
//     console.log(`mail ${mail} registrado, en un momento le responderemos`);
//   }
// } while (repetir);



// EJEMPLO 8 SWITCH - CONDICONALES - WHILE 🚀

// alert('Bienvenido a nuestro sitio web');

// let registro = prompt('Desea registraerse ? SI o NO').toUpperCase();

// while (registro != 'SI' && registro != 'NO') {

//     alert('Debe colocar SI o NO')
//     registro = prompt('Desea registraerse ? SI o NO');
    
// }

// if(registro == 'SI'){

//     let nombre = prompt('Ingrese su nombre');
//     while(nombre == '' || nombre.length < 3 ){
//         alert('Ingrese un nombre válido');
//         nombre = prompt('Ingrese su nombre');
//     }

//     let claveNumerica = Number(prompt('Ingrese su clave numérica de 6 dígitos'));

//     while(!Number(claveNumerica) || claveNumerica.toString().length < 6){
//         alert('Ingrese una clave numérica válida')
//         claveNumerica = Number(prompt('Ingrese su clave numérica de 6 dígitos'));
//     }

//     alert('Usuario registrado con éxito');
// }


// let prestamo = prompt('Desea un prestamo?').toUpperCase();

// if(prestamo == 'SI' ){

//     const banco = prompt('Ingrese su banco').toUpperCase();
//     const monto= Number(prompt('Ingrese el monto de su préstamo'));

//     let interes;


//     switch(banco){
//         case 'SANTANDER':
//             interes=1.12;
//             break;
//             case 'MACRO':
//                 interes=1.25;
//                 break;
//                 case 'NACION':
//                     interes = 1.9;
//                     break;
//                     case 'GALICIA':
//                         interes=2.5;
//                         break;
//                         default:
//                             alert('No ingresaste un banco válido')
//     }

//     alert(`Tu monto a devolver al banco ${banco} es de ${monto * interes}`)

// }
