/*estructura de una funcion declarada (declaration)

function nombre(parametros) {
  //codigo
}

*/

/*ejemplo

function saluda() {
  console.log('!hola mundo!')
}

saluda();

*/

//creemos una funcion reutilizable

function saluda(nombre) {
  console.log(`hola ${nombre}`)
}


//el parametro lo difinimos al momento de llamar a la funcion, para que esta funcione correctamente.

saluda('pepe');
saluda('juan');
saluda('machas');

//funcion return, sirve para devolver un valor cuando se llama la funcion

function alumnos_nombre(nombre) {
  return `hola alumno ${nombre}`;
};

let valor_devuelto = alumnos_nombre('pepe');

console.log(valor_devuelto);


//ejemplo uso funciones, 

function area_cuadrado(lado) {
  return lado*lado
}

console.log(area_cuadrado(5));


/* porque son tan utiles las funciones

let lado = 6;

let area_de_un_cuadrado = lado * lado;

console.log(area_de_un_cuadrado);

lado = 20;

area_de_un_cuadrado = lado * lado;

console.log(area_de_un_cuadrado); */

//funcion para un retangulo

function area__rectangulo (base, altura) {
  return base * altura;
};

console.log(`el area de tu rectangulo es ${area__rectangulo(5,10)}`);

//podemos guardar una funcion dentro de una variable, lo cual genera una funcion expresada (expresion)
//firts class function

let area_rectangulo = function (base, altura) {
  return base * altura;
};

console.log(area_rectangulo(4,6)); 

//arrow function

let area_triangulo = (base, altura) => (base*altura)/2;

console.log(area_triangulo(5,10));