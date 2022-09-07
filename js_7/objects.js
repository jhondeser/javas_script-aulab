// creacion de un objeto

let carro = {
  nombre:'pegout',
  modelo:2005,
  color:'rojo',
  costo:'6000'
};

console.log(carro.nombre)

//podemos crear objetos que contengan arrays como valor

let user = {
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: ['earth','c137']
}

console.log(user.origin[1]);

//incluso podemos encadenar un objeto dentro de otros

let user2 = {
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    id: "c137",
    country: "United states"
  },
}

console.log(user2.origin)

//¿Cómo puedo acceder a una propiedad o método del objeto?

console.log(user[`status`]);
user.status = true;
console.log(user.status)

//Como añadir una propiedad o un método a un objeto.

user.age = 70;
console.log(user.age)

//los objetos tambien se pueden recorrer un objeto

for(let i in user) {
  console.log(i)
  console.log(user[i])
}

