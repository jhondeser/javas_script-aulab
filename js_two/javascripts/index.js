//dato primitivo
const num = 26;
const list = [1,2,3,4];
 
//dato estructural
 
let a = 1;
let b = "3";
let list_dos = [1,2,3,4];
 
 
b = b + a;
 
console.log(b);
 
//como se que tipo de dato es b
 
console.log(b,typeof(b));
 
//usemos este metodo para poder reconocer los datos que ya creamos
 
console.log(a,typeof(a));
console.log(list_dos,typeof(list_dos));
 
//recuerda que java es una calculadora muy poderosa.
//formas de hacer un número exponencial.
 
console.log(2e3);
console.log(2e-3);
 
//la máquina interpreta los números binarios como su respectivo números del
//para ver un número binario como número agregamos un 0b y seguido del código de dicho número
 
console.log(0b1111011);
 
//de hexadecimal a numero, se usa 0x seguido del codigo del numero
 
console.log(0x3A);
 
//recuerda que todos estos datos podemos guardarlos en variables
 
let exponencial_num = 2e3;
let binario_num = 0b1111011;
let hexadecimal_num = 0x3A;
 
console.log(exponencial_num);
console.log(binario_num);
console.log(hexadecimal_num);
 
//podemos combinar nuestros strings
 
console.log("Jhonatan"+" "+"Mogollón");
 
/*pero podríamos poner todo en cadena tipo "jhonatan mogollon",
pero si tenemos variables como bases de datos y estos nombres cambian le da un uso más real*/
 
let nombre;
let apellido;
 
nombre = "Jhonatan";
apellido = "Mogollón";
 
//usamos el + para concatenar nuestros datos tipo string
 
console.log(nombre +" "+ apellido);
 
//existe otra forma de concatenar usando el signo $ para llamar nuestras variables
 
console.log(`mi nombre es ${nombre} ${apellido}`);
 
//vamos ahora a sumar nuestros datos numéricos
 
console.log(exponencial_num+binario_num);
 
//si utilizamos el + entre un número y un string este dato se convierte en un string con
 
console.log(hexadecimal_num+nombre);
console.log(`${hexadecimal_num} ${nombre}`);
 
//datos boolenos son true o false.
 
let verdadero = true;
let falso = false;
 
console.log(typeof verdadero);
console.log(typeof falso);
 
//para java todos los valores son verdaderos menos el false, 0, "", null NaN.
//podemos revisar estos valores utilizando el método Boolean (explicar porque 0 es false)
 
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
 
//usemos este metodo en otros datos de js
 
console.log(Boolean(2));
console.log(Boolean("hola"));
console.log(Boolean(true));
 
//podemos utilizar este metodo con variables
 
console.log(Boolean(exponencial_num));
console.log(Boolean(apellido));
 
 
//podemos utilizar comparadores para recibir un valor booleano
 
console.log(1 > 2);
console.log(1 < 2 < 3);
console.log(1 < 3 < 2); // 1 < 3 = true, como true es igual a 1, 1 < 2 = true
 
/*para poder comunicarnos de forma correcta con la maquina tenemos
que hacer uso correcto de nuestros () */
 
console.log(1 < (3 < 2)); // 3 < 2 = false, 1 < 0 = false
 
//diferencial entre null y undefined
//undefined es una variable que fue creada pero no se le ha asignado ningún tipo de dato es
 
let ciudad;
 
console.log(ciudad);
 
//si le pedimos el tipo de dato a una variable vacia tambien sera undefined pero no me da un error
 
console.log(typeof ciudad);
 
//vamos a iniciar a conocer los operadores
 
//operadores matematicos
 
let n = 10;
 
console.log(n / 2);
console.log(n - 3);
console.log(n * 3);
console.log(n % 3);
 
//operadores de comparación devuelve un booleano
//operadores de igualdad == Abstract Equality comparison
//== Abstract Equality comparison
 
let c = 5;
let d = "5";
 
console.log(c == d);
 
// === strict equality comparison
 
console.log(c === d);
 
// == Abstract inequality comparison
 
console.log(c != d);
 
// === Abstract inequality comparison
 
console.log(c !== d);
 
//comparadores tamaños
 
console.log(c < d);
console.log(c > d);
console.log(c <= d);
console.log(c >= d);
 
//uso de and y ord
 
//tabla true
console.log("table de true");
console.log((true) && (false));
console.log((true) || (false));
console.log((true) && (true));
console.log((true) || (true));
 
//tabla false
console.log("table de false");
console.log((false) && (true));
console.log((false) || (true));
console.log((false) && (false));
console.log((false) || (false));
 
//convertir mis datos
 
console.log(Number("23"));
console.log(typeof(Number("23")));
 
//igualmente podemos hacerlo con variables
 
let e = "9";
console.log(typeof(e));
e = Number(e);
console.log(typeof(e));
 
//otros tipos de funciones que podemos acoplar a la función number
 
console.log(Number.isFinite(e));
console.log(Number.isInteger(e));
 
//otra forma de trabajar con numeros es math https://www.w3schools.com/js/js_math.asp
 
console.log(Math.sqrt(9)); //raiz cuadrada
console.log(Math.PI); //numero pi
console.log(Math.round(5.3)); //redondea al num mas cercano
console.log(Math.ceil(5.3)); //redondea al num mas cercano por arriba
console.log(Math.floor(5.3)); //redondea al num mas cercano por debajo
console.log(Math.max(40,34,52,21,96,69)); //busca el numero mayor en una lista de num
console.log(Math.min(40,34,52,21,96,69)); //busca el numero menor en una lista de num
 
//type conversion implicit, es la que tiene el programa por defecto
 
console.log(typeof (2+"2")) //generamos una operación entre string y número
let num1 = "5";
let num2 = 5;
console.log(typeof(num1+num2)); //generamos una operacion entre string y numero
num1 = Number(num1);
console.log(typeof(num1+num2)); //generamos la operacion entre dos numeros
 
//ejemplos
 
console.log(2+2);
console.log(2+"2");
console.log(true + true); // recordar true = 1 => true + true = 1 + 1 = 2
console.log((true + true) == (1 + 1)); //hacer ejemplo con ===
console.log(5 < 2 < 1);
 
console.log(typeof(2+2));
console.log(typeof(2+"2"));
console.log(typeof(true + true));
console.log(typeof((true + true) == (1 + 1)));
console.log(typeof(5 < 2 < 1));
 
console.log((2+2),typeof(2+2));
console.log((2+"2"),typeof(2+"2"));
console.log((true + true),typeof(true + true));
console.log(((true + true) == (1 + 1)),typeof((true + true) == (1 + 1)));
console.log((5 < 2 < 1),typeof(5 < 2 < 1));
 
console.log("2"+"2"-"1");
console.log(typeof("2"+"2"-"1")); // el operador menos solo funciona con numeros por lo tanto convierte el anterior elemento en un numero
console.log("25"+"2"-"1");
console.log("hola"+"2"-"1"); //por si quieren ver texto con numero y menos
 
//metodo para manejar decimales
 
let y = 9.8128949
 
console.log(y.toFixed());
console.log(y.toFixed(3));
 
//como mostar un mensaje al usuario para ser aceptado
 
alert("hola usuario");
 
//prompt tambein nos permite enviar un mensaje pero con dos opciones cancelar o aceptar y entrada de datos
 
let modal = prompt("caul es tu nombre");
console.log(modal)