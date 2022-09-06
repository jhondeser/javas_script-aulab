/*controladores de los tipòs de flujo

if
if else
else if
switch
try catch

//sintaxis de los controladores de flujo

keyword (condicion) {
  accion que se cumple al ser verdadera
}

*/

//controlador Infinity

if (true){
  console.log("tu condicion se cumple!");
}

//utilizando los comparadores podiamos obtener datos tipo booleano

if (10 > 5) { //como 10 > 5 = true por lo tanto el flujo se ingresa al if
  console.log("10 es mayor que 5");
} 

if (10 < 5) { //como 10 < 5 = false no ingresa a mi condicional
  console.log("10 es menor que 5");
} 

//if single line

if (true) console.log("recuerda que solo funciona con solo una linea!");

//ejemplo con mas de una linea
let a = 6;
let b = 9;

if (a>b) {
  console.log(`el numero ${a} es mayor al numero ${b}`);
  c = a + b;
  console.log(`la suma de estos dos numero es igual a ${c}`);
};

//podemos controlar las flujo en hambas direcciones tanto verdaderas como falsas

if (a > b) { //si es verdadero el flujo ingresa al if
  console.log(`el numero ${a} es mayor al numero ${b}`);
  c = a + b;
  console.log(`la suma de estos dos numero es igual a ${c}`);
} else { //si la condicion del if no se cumple entonces el flujo ingresa al else
  console.log(`el numero ${a} es menor al numero ${b}`);
  c = b - a;
  console.log(`la suma de estos dos numero es igual a ${c}`);
}

//un uso util para el if, detectar un numero para la condicion

let x = 16;

if (x % 2 == 0) { // si el reciduo es igual a 0 entonces es par 
  console.log(`el numero ${x} es par`);
} else { // si el reciduo es diferente a 0 entonces es impar
  console.log(`el numero ${x} es impar`);
}

//ejemplo 2

if (x % 2 == 0) { // si el reciduo es igual a 0 entonces es par 
  console.log(`el numero ${x} es par`);
  x = x/2
  console.log(x);
} else { // si el reciduo es diferente a 0 entonces es impar
  console.log(`el numero ${x} es impar`);
  x = x*2
  console.log(x);
}

//uso del else if

let num1 = 9;
let num2 = 9;

if (num1 > num2) {
  console.log(`el numero ${num1} es mayor al numero ${num2}`);
} else if (num1 < num2) {
  console.log(`el numero ${num1} es menor al numero ${num2}`);
} else if (num1 == num2) {
  console.log(`el numero ${num1} es igual al numero ${num2}`);
} else {
  console.log('error los datos no se pueden comparar');
}

//uso de switch se usa para comparar dos elementos 

//se puede usar como el if pero es una mala practica
switch (true) {
  case (num1 > 9):
    console.log(`el numero ${num1} es mayor al numero ${num2}`);
    break;

  case (num1 < 9):
    console.log(`el numero ${num1} es menor al numero ${num2}`);
    break;

  case (num1 == 9):
    console.log(`el numero ${num1} es igual al numero ${num2}`);
    break;

  default: console.log('error');
    break;
}

//uso correcto del switch

let color = "rojo";

switch (color) {
  case "rojo":
    console.log('el elemento fuego es representado por el rojo');
    break;

  case "negro":
    console.log('tampoco es este');
    break;
  
  case "verde":
    console.log('si fuera mas natural');
    break;
  
  case 5:
    console.log('joder esto es un numero');
    break;

  default: console.log('aca no estaba tu color');
    break;
}

//ejemplo 2

/*let suerte = prompt('gana un premio, elige un numero del 1 al 6');
suerte = Number(suerte);

switch (suerte) {
  case 1:
    alert('perdiste')
    break;

  case 2:
    alert('perdiste')
    break;

  case 3:
    alert('perdiste')
    break;

  case 4:
    alert('perdiste')
    break;
  
  case 5:
    alert('perdiste')
    break;
  
  case 6:
    alert('ganaste')
    break;
  
  default: console.log('era un numero entre el 1 y el 6')
    break;
} */

/*como funciona el try, es el codigo que nos gustaria que se ejecutara
y catch es el codigo que se ejecuta si try tiene errores */

//ejemplo

try {
  console.log(carro);
} catch (error) {
  console.log('ha habido un error')
}

//operador terario - operador condicional

/*sintaxis

condicion ? expresion 1 : expresion 2 */

let nota_final = 5;

suzpenso = nota_final > 3.5 ? 'aprovaste': 'perdiste';

console.log(`para esta materia tu ${suzpenso}`)

nota_final > 3.5 ? console.log('aprovaste'): console.log('perdiste');


//bucles, se repite la funcion mientras alla 

//contar de 1 10 utilizando un ciclo while
/*
let cont = 0;

while (cont <= 10) { //como ponemos menor o igual se suma uno mas
  cont++;
  console.log(`cuenta conmigo ${cont}`);
};

//contar de 1 10 utilizando un ciclo for

/*let i = 3;

while (i) {
  //alert(i--);
};

//do while .... minetras se cumpla la condicion del do el while seguira generando un blucle

/*do {
  console.log('do once')
} while ();

//ciclo for este ciclo tiene un rango, inicio y final, se incrementa en un valor dado

/*sintaxis
for (valor inicial, condicion, iterador){
  instruccion
} */

for (let i = 0; i <= 10; i++) {
  console.log(`cuenta conmigo ${i}`);
}
