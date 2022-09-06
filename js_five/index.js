//arrays

let datos = ['jhonatan','mogollon',26,'jhonata.mog@gmail.com'];

let datos_parejas = [
  ['jhonatan','mogollon',26,'jhonata.mog@gmail.com'],
  ['juan','mogollon',27,'juan.mog@gmail.com'],
  ['luci','garcia',50,'luci96@gmail.com']
];

console.log(datos);

console.log(datos_parejas[0][1]);

//podemos modificar los datos en cada elemento del

datos[0] = 'leonardo';

datos[4] = 'rojo';

datos[6] = '1,65';

console.log(datos);

//que creen que suceda si pedimos mostrar la pos vacia

console.log(datos[5]);

//podemos ver la longitud de nuestro array

console.log(datos.length);

//metodos para los arrays

//metodos para cambiar la estructura (mutator)

//metodos para acceder a un punto del array (iterator)

//metodos para devolver un array modificado (accesor), crea uno nuevo.

let frutas = ['manzana','banano'];

console.log(frutas.lastIndexOf('banano')); //te da el indice de un elemento
console.log(frutas.pop()) //elimina el ultimo elemento
console.log(frutas.shift()) //elimina el primer elemento

frutas.unshift('fresas')//agrega un elemento al comienzo
frutas.push('piña')

console.log(frutas);

//crear arrays desde elementos parecidos a un arrays

let a = 'jhonatan';

let b = Array.from(a);

console.log(b);

//concat une dos arrays

let list_1 = ['a','b','c'];
let list_2 = ['d','e','f'];
let list_3 = [1,2,3,4,5];

let array_concat = list_1.concat(list_2,list_3);

console.log(array_concat);

//metodo reverse

let array_reverse = list_3.reverse();

console.log(array_reverse);

