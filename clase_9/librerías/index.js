// EJEMPLO 1 SWEET ALERT 🚀

// https://sweetalert2.github.io/

// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue?',
//     icon: 'error',
//     confirmButtonText: 'Cool'
// })


// Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success"
//   });



// EJEEMPLO 2 SWEETALERT - CLICK 🚀

// const btn = document.querySelector('#myBtn')
// btn.addEventListener('click', () => {

//     Swal.fire({
//         title: 'Genial!',
//         text: 'Haz clickeado el botón!',
//         icon: 'success',
//         confirmButtonText: 'Cool'
// })
// })



// EJEEMPLO 3 SWEETALERT - CLICK - TIMER - BOTON DE CONFIRMACION 🚀

// const btn = document.querySelector('#myBtn2')

// btn.addEventListener('click', () => {
// Swal.fire({
//     position: 'bottom-start',
//     icon: 'success',
//     title: 'Your work has been saved',

//     showConfirmButton: false,
//     timer: 3000
// })
// })



// EJEMPLO 4 SWEETALERT - IMAGEN 🚀

// Swal.fire({
//     title: 'Sweet!',
//     text: 'Modal with a custom image.',
//     imageUrl: 'https://unsplash.it/400/200',

//     imageWidth: 200,
//     imageHeight: 200,
//     imageAlt: 'Custom image',
// })



// EJEMPLO 5 SWEETALERT - CONFIRMACION 🚀

// const btn = document.querySelector('#myBtn2')

// btn.addEventListener('click', () => {
   
//     Swal.fire({
//         title: 'Está seguro de eliminar el producto?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Sí, seguro',
//         cancelButtonText: 'No, no quiero'
//     }).then((result) => {
//         console.log(result);
//         if (result.isConfirmed) {
//             Swal.fire({
//                 title: 'Borrado!',
//                 icon: 'success',
//                 text: 'El archivo ha sido borrado'
//             })
//         }
//     })
// })



// EJEMPLO 6 -  TOASTIFY 🚀

// const btn_toastify = document.querySelector('#btn-toastify')

// btn_toastify.addEventListener('click', () => {
   
//     Toastify({
//         text: "Probando toast!",
//         duration: 3000
//     }).showToast();


//     Toastify({
//         text: "Probando toast!",
//         duration: 3000,
//         gravity: 'top',
//         position: 'left'
//     }).showToast();

// })



// EJEMPLO 7 TOASTIFY - STYLE 🚀

// const btn_toastify_style=document.querySelector('#btn-toastify-style')

// btn_toastify_style.addEventListener('click', () => {

//     Toastify({
//         text: "Probando toast!",
//         duration: 3000,
//         gravity: 'bottom',
//         position: 'left',
//         style: {
//             background: 'linear-gradient(to right, #00b09b, #96c92d)'
//         }
//     }).showToast();

// })



// EJEMPLO 8 TOASTIFY - CLASSNAME 🚀

// const btn_toastify_className=document.querySelector('#btn-className')

// btn_toastify_className.addEventListener('click', () => {

// Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     gravity: 'bottom',
//     position: 'left',
//     className: 'notificacion my-toast'
// }).showToast();
// })



// EJEMPLO 9 TOASTIFY - CLICK 🚀

// const btn_toastify_click=document.getElementById('btn-click')

// btn_toastify_click.addEventListener('click', () => {
   
//     Toastify({
//         text: "Probando toast!",
//         duration: 5000,
//         onClick: () => {
           
//             Toastify({
//                 text: 'Clickeaste un Toast!',
//                 duration: 1500,
//                 position: 'left'
//             }).showToast()
//         }
//     }).showToast();
// })



// EJEMPLO 10 TOASTIFY - DESTINATION 🚀

// const btn_toastify_destination=document.querySelector('#btn-destination')

// btn_toastify_destination.addEventListener('click', () => {
   
//     Toastify({
//         text: "Click aquí para ir a Coder!",
//         duration: 3000,
//         destination: 'https://www.coderhouse.com'
//     }).showToast();

// })



// EJEMPLO 11  LUXON  🚀
// Acceso a la librería

// const DateTime = luxon.DateTime
// console.log(DateTime)
// const dt = DateTime.local(2024, 9, 25, 12, 10)
// console.log(dt)
// console.log(dt.year)
// console.log(dt.month)
// console.log(dt.day);




// EJEMPLO 12 LUXON - FECHA A TRAVÉS DE UN OBJETO 🚀

// const DateTime = luxon.DateTime
// const dt = DateTime.fromObject(
//     { day: 14, hour: 12, month: 9 },
//     { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
//  )

// console.log(dt.toString())



// EJEMPLO 13 LUXON - MÉTODO FROMISO 🚀
// const DateTime = luxon.DateTime

// const fecha = DateTime.fromISO("2025-05-27")
// console.log(fecha.toString())

// console.log(DateTime.fromISO("2017-05-15T08:30:00").toString()) 



// EJEMPLO 14 LUXON - DATETIME.NOW🚀

// const DateTime = luxon.DateTime

// const now = DateTime.now()
// console.log(now)
// console.log(now.year) 
// console.log(now.month) 
// console.log(now.day) 
// console.log(now.weekday)
// console.log(now.weekdayLong);



// EJEMPLO 15 LUXON - DATETIME.LOCAL 🚀

// const DateTime = luxon.DateTime

// const dt = DateTime.now();
// const local=DateTime.local(2024, 9, 25)
// console.log(local.toString())

// console.log(dt)

// console.log( dt.zoneName ) 
// console.log( dt.daysInMonth ) 

// const div=document.createElement('div')
// div.innerHTML=`${dt.toString()} <br>
// ${dt.zoneName} <br>
// ${dt.daysInMonth}

// `
// document.body.appendChild(div)








// EJEMPLO 16 LUXON - FORMATEAR FECHA 🚀

// const DateTime = luxon.DateTime

// const dt = DateTime.now();

// console.log(dt.toLocaleString() )
// console.log(dt.toLocaleString(DateTime.DATE_FULL) )
// console.log(dt.toLocaleString(DateTime.TIME_SIMPLE) )

// console.log(dt.setLocale('en').toLocaleString(DateTime.DATE_FULL)  )
// console.log(dt.setLocale('es').toLocaleString(DateTime.DATE_HUGE))
// console.log(dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY))
// console.log(dt.toLocaleString(DateTime.DATE_SHORT))
// console.log(dt.toLocaleString(DateTime.DATE_MED))

// DOM 👇
// const div=document.createElement('div')
// div.innerHTML=`${dt.toLocaleString(DateTime.DATE_FULL)} <br>
// ${dt.toLocaleString(DateTime.TIME_SIMPLE)} <br>
// ${dt.daysInMonth}

// `
// document.body.appendChild(div)





// EJEMPLO 17 LUXON - PLUS Y MINUS 🚀
// const DateTime = luxon.DateTime
// const dt = DateTime.now();

// console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )

// const suma = dt.plus({ hours: 5, minutes: 15 })
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))

// const resta = dt.minus({ month: 2, days: 10,hours:3,minutes:10 })
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))



// EJEMPLO 18 LUXON - DURATION 🚀
// Podemos sumar y restar con "plus" y "minus"
// const DateTime = luxon.DateTime
// const Duration = luxon.Duration

// const dt = DateTime.now();
// const dur = Duration.fromObject({ hours: 3, minutes: 15,days:10 });
// console.log(dur);
// console.log( dur.hours ) // 3
// console.log( dur.minutes ) // 15
// console.log( dur.seconds ) // 0

// console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )

// const suma = dt.plus(dur)
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))

// const resta = dt.minus(dur)
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))



// EJEMPLO 19 LUXON - INTERVAL 🚀
// Podemos enviar dos fechas y nos devuelve el intervalo entre ellas
// const DateTime = luxon.DateTime
// const Interval = luxon.Interval
// const dt = DateTime.now();

// const now = DateTime.now()


// const later = DateTime.local(2029, 10, 26)
// const i = Interval.fromDateTimes(now, later)

// const redondeoDias= i.length('days')
// const redondeoHoras=i.length('hours')
// const redondeoMinutos=i.length('minutes')
// const redondeoMes=i.length('months')

// console.log( i.length('days') ) 
// console.log( i.length('hours') )
// console.log( i.length('minutes') ) 
// console.log(i.length('months'))


// console.log(Math.ceil(redondeoDias));
// console.log(Math.ceil(redondeoHoras));
// console.log(Math.ceil(redondeoMinutos));
// console.log(Math.ceil(redondeoMes));

