// EJEMPLO 1 🚀
// const array = [1,2,3,4,5,6,7,8,9,10];
// console.log(array);
 

// EJEMPLO 2 🚀
// const arrayElemenetos= [10,'Martes', true,false, null, undefined, ()=>{}]

// console.log(arrayElemenetos);
// console.log(arrayElemenetos[2]);

// EJEMPLO 3 🚀

// const numeros = [10,25,30,44]

// for (let index = 0; index < numeros.length; index++) {
//     console.log(`El número ${numeros[index]} del array corresponde a la iteración ${index} del ciclo`);;
    
// }

// EJEMPLO 4 - PUSH - UNSHIFT🚀

// const numeros = [ 10,100]
// numeros.push(true)

// console.log(numeros);

// numeros.unshift(false)

// console.log(numeros);


// EJEMPLO 5 - SPLICE 🚀

// const nombres= ['Juan', 'Romina', 'Enzo', 'Pedro', 'Miguel'];

// nombres.splice(0,1)

// console.log(nombres);


// EJEMPLO 6 - JOIN 🚀

// const nombres= ['Juan', 'Romina', 'Enzo', 'Pedro', 'Miguel'];

// console.log(nombres.join('   -- '));


// EJEMPLO 7 - CONCAT 🚀

// const perros = ['Doberman', 'Ovejero', 'Rottweiller']
// const gatos = ['siames', 'Gato Esfinge', 'Gato persa']


// const todasLasMascotas= perros.concat(gatos)

// console.log(todasLasMascotas.join('  // '));


// EJEMPLO 8 -INDEXOF 

// const nombres= ['Juan', 'Romina', 'Enzo', 'Pedro', 'Miguel'];
// console.log(nombres.indexOf('Martín'));


// EJEMPLO 9 - INCLUDES 🚀
// const nombres= ['Juan', 'Romina', 'Enzo', 'Pedro', 'Miguel'];

// console.log(nombres.includes('Pedroo'));

// EJEMPLO 10 - REVERSE 🚀
// const nombres= ['Juan', 'Romina', 'Enzo', 'Pedro', 'Miguel'];

// console.log(nombres.reverse());


// EJEMPLO  11 - APLICADO 🚀

// const nombresTotal= [];
// let cantidad = 3

// do {

//     let nombreUsuario = prompt('Ingrese su nombre');
//     nombresTotal.push(nombreUsuario)
//     console.log(nombresTotal);


    
// } while (nombresTotal.length != cantidad);


// EJEMPLO 12 🚀

const nombres= ['Juan', 'Romina', 'Enzo', 'Pedro', 'Miguel'];

const borrarUsuario = (usuario) =>{

    let usuarioAEliminar = nombres.indexOf(usuario);
    console.log(usuarioAEliminar);

    if(usuarioAEliminar != -1){

        nombres.splice(usuarioAEliminar,1)
        console.log(nombres);

    }
    else{

        console.log(`No existe ${usuario}`);
    }


}

borrarUsuario('Juan Pablo')

