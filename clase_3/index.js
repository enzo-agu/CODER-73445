// EJEMPLO 1 FUNCION 🚀

// function saludar (){
//     console.log('Estoy saludando');
// }

// saludar()



// EJEMPLO 2 FUNCION 🚀

// function solictarNombre (){
//     let nombreUsuario = prompt('Ingrese su nombre');
//     alert(`El nombre es ${nombreUsuario}`)
// }

// solictarNombre()


// EJEMPLO 3 FUNCION CON PARAMETROS 🚀

// let nombreUno='enzo'
// let telefono=1234

// function conParametros(nombre,numeroTel){

//     console.log(nombre,numeroTel);

// }

// conParametros(nombreUno,telefono)


// EJEMPLO 4 FUNCION CON PARAM  🚀

// let resultado = 0;

// function sumar (numeroUno , numeroDos){

//     resultado = numeroUno + numeroDos

//     console.log(resultado);

// }

// sumar(10,20)

// resultado= 40
// console.log(resultado);


// EJEMPLO 5 FUNCION CON PARAM Y RETURN  🚀

// function calculadora (primerNum,segundoNum,operacion){

    
    // console.log(primerNum + segundoNum);
    
    // return primerNum + segundoNum

    // switch (operacion) {
    //     case '+':
    //     return primerNum + segundoNum;
    //        case '-':
    //         return primerNum - segundoNum;
    //         case '*':
    //             return primerNum * segundoNum;
    //             case '/':
    //                 return primerNum / segundoNum;   
    //             default:

    //             return alert('No es una operación válida')
    // }

// }

// console.log(calculadora(10,20));

// console.log(calculadora(Number(prompt('Ingrese el primer número')),Number(prompt('Ingrese el segundo número')), prompt('Ingrese el tipo de operación')));


// EJEMPLO 6 SCOPE - VARIABLES LOCALES 🚀

// function sumar (num1, num2){
//    return num1 + num2
// }
// console.log(sumar(5,5));

// sumar(5,5)


// EJEMPLO 7  FUNCION ANONIMA 🚀

// const suma = function (num1,num2){ return num1 + num2 };
// const resta = function (num1,num2){ return num1 - num2 }


// console.log(suma(10,8));
// console.log(resta(5,3));


// EJEMPLO 8  FUNCION FLECHA 🚀

// const multiplicar = (n1,n2) => n1 * 10

// console.log(multiplicar(10,10));


// EJEMPLO 9  FUNCION FLECHA 🚀

// const suma = (numero1 , numero2) => numero1 + numero2

// const resta = (numero1 , numero2) => numero1 - numero2

// const iva = dato => dato * 0.21


// let precioProducto = 500;
// let descuento = 50 ;

// let precioFinal = resta(suma(precioProducto,iva(precioProducto)),descuento)

// console.log(precioFinal);



// EJEMPLO 10 FUNCION FLECHA 🚀

// const IVA = 1.21;

// const agregarIva = precioIva => precioIva * IVA ;

// let precio = 100 ;

// console.log(`Precio final: ${agregarIva(precio).toFixed(2)}`);


// EJEMPLO 11 FUNCION FLECHA - FOR 🚀

// let pregunta = Number(prompt('Cuantos turnos desea ?'))

// const turnosDisponibles=4

// function asignarTurno(cantidadTurnos){

//     while (cantidadTurnos < turnosDisponibles) {

//         for (let index = 0; index < cantidadTurnos; index++) {


            
//         }
        
//     }

// }

// asignarTurno(pregunta)