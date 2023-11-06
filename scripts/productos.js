const getRandomQuantity = () =>{
    return Math.floor(Math.random() * 30)+1;
};

const objeto = [
{id: 1, nombre: "Sarten", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(50.00) + "€"},
{id: 2, nombre: "Tornillo M4", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(0.50) + "€"},
{id: 3, nombre: "Cuchillo ", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(10.00) + "€"},
{id: 4, nombre: "Desatascador", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(15.00) + "€"},
{id: 5, nombre: "Hoja de Sierra Radial", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(17.00) + "€"},
{id: 6, nombre: "Cinta Americana", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(5.00) + "€"},
{id: 7, nombre: "Destornillador Estrella", cantidad: parseInt(getRandomQuantity()), precio: parseFloat(8.00) + "€"},
];
export {objeto};
