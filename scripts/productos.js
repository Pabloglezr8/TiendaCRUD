const getRandomQuantity = () =>{
    return Math.floor(Math.random() * 30)+1;
}

export {camiseta};

const camiseta = [
{idCount: 1, nombre: "Pablo", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(50.00)},
{idCount: 2, nombre: "Daniel", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(40.00)},
{idCount: 3, nombre: "Adrian", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(30.00)},
{idCount: 4, nombre: "Alfonso", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(20.00)},
{idCount: 5, nombre: "David", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(10.00)},
]