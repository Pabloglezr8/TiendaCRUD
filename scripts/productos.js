const getRandomQuantity = () =>{
    return Math.floor(Math.random() * 30)+1;
};

const camisetasArray = [
{id: 1, nombre: "Pablo", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(50.00)},
{id: 2, nombre: "Daniel", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(40.00)},
{id: 3, nombre: "Adrian", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(30.00)},
{id: 4, nombre: "Alfonso", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(20.00)},
{id: 5, nombre: "David", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(10.00)},
];
export {camisetasArray};

const pantalonesArray = [
{id: 1, nombre: "Martin", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(50.00)},
{id: 2, nombre: "Jorge", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(40.00)},
{id: 3, nombre: "Pedro", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(30.00)},
{id: 4, nombre: "Nicolas", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(20.00)},
{id: 5, nombre: "Emilio", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(10.00)},
];
export {pantalonesArray};

const playerosArray = [
{id: 1, nombre: "Felipe", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(50.00)},
{id: 2, nombre: "Gonzalo", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(40.00)},
{id: 3, nombre: "Javier", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(30.00)},
{id: 4, nombre: "Lucas", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(20.00)},
{id: 5, nombre: "Marcos", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(10.00)},
];
export {playerosArray};