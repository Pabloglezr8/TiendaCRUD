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
