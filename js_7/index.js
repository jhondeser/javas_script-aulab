let list = [2,4,6,8,10,12];

//metodo foreach me permite recorrer cada elemento de un arreglo element

function myList(item,index) {
  console.log(item,index);
}

list.forEach(myList);

//map sirve de una forma similar pero map nos regresa un nuevo arreglo, 
//por lo tanto map hace una operacion durante cada elemento y lo agraga a un nuevo arreglo element

let new_list = list.map((item, index) => {
  return (item-1);
});

console.log(new_list);
console.log(list);

//metodo filter, como su nimbre indica nos ayuda a filtar la informacion

let filter_list = new_list.concat(list)
console.log(filter_list);

let result = filter_list.filter((item) => {
  return item % 4 == 0;
})


