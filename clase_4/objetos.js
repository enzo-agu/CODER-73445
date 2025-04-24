// EJEMPLO 1 🚀

// let nombre = 'Homero';
// let edad = 40;
// let calle = 'Av. Siempreviva 1234';

// let persona1 = {
//     nombre: 'Homero',
//     edad: 40,
//     calle : 'Av. Siempre viva 1234'
   
// }

// console.log(persona1.calle);
// console.log(persona1['calle']);


// EJEMPLO 2 🚀

// const persona1 = {
//     nombre: 'Homero',
//     edad: 40,
//     calle : 'Av. Siempre viva 1234'
   
// }

// console.log(persona1);
// persona1.edad = 36;
// console.log(persona1);


// EJEMPLO 3

const personas = []

class Persona {

    constructor(nombre, edad, calle, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
        this.altura = altura;
    }

    registro(){
        console.log(`Usuario ${this.nombre} de ${this.edad}, domiciliado en ${this.calle}, altura ${this.altura}`);
    }

}
personas.push(new Persona('Homero', 39, 'Av. Siempreviva', 1234))
personas.push(new Persona('Marge', 36, 'Av. Siempreviva', 1234))

console.log(personas);






// const usuario1 = new Persona('Homero', 39, 'Av. Siempreviva', 1234)
// // usuario1.registro()

// const usuario2 = new Persona('Marge', 36, 'Av. Siempreviva', 1234)
// // usuario2.registro()


// const usuario1 = new Persona(prompt('Ingrese su nombre'), Number(prompt('Ingrese su edad')),prompt('Ingrese su calle'), Number(prompt('Ingrese su altura')) )

// const usuario2 = new Persona(prompt('Ingrese su nombre'), Number(prompt('Ingrese su edad')),prompt('Ingrese su calle'), Number(prompt('Ingrese su altura')) )

// console.log(usuario1, usuario2);








