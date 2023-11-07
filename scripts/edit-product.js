import { objetos } from "./productos.js";
import { updateTable } from "./update-table.js";

 export function editProduct(nameCell, quantityCell, priceCell) {

    // Habilita la edición de los campos de nombre, cantidad y precio
    nameCell.contentEditable = true;
    quantityCell.contentEditable = true;
    priceCell.contentEditable = true;


    
}

//funcion validar los cambios en las características del producto y guardarlos en el array
export function saveProduct(id, nameCell, quantityCell, priceCell) {
    // Guarda los cambios en el array de productos
console.log("pasa por aqui")
const product = objetos.find(product => product.id === id);

const name = (nameCell.textContent)
if (!name) {
    alert("El campo nombre no puede estar vacío")
    return
}else{
    console.log("pasa por el if nombre")
    product.nombre = nameCell.textContent;
}

const quantity = parseInt(quantityCell.textContent)
if (isNaN(quantity) || quantity <= 0) {
    alert("Cantidad no válida");
    return;
} else {
    product.cantidad = quantity;
}

const price = parseFloat(priceCell.textContent);

if (isNaN(price) || price <= 0) {
    alert("Precio no válido");
    return;
} else {
    product.precio = price;
}

if (product && quantity && price) {
    // Deshabilita la edición de los campos
    nameCell.contentEditable = false;
    quantityCell.contentEditable = false;
    priceCell.contentEditable = false;
}

    updateTable(objetos)
} 



