import { updateTable } from "./update-table.js";
import { objetos } from "./productos.js";

export function addProduct() {
    let idCount = 0;
    const productName = document.getElementById("product-name").value;
    const productQuantity = document.getElementById("product-quantity").value;
    const productPrice = document.getElementById("product-price").value;

    // Validar que se hayan ingresado valores
    if (!productName || !productQuantity || !productPrice) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    if (productQuantity < 0) {
        alert("Cantidad no válida")
        return;
    }

    if (productPrice < 0) {
        alert("Precio no válido")
        return;
    }

    const producto = {
        id: idCount,
        nombre: productName,
        cantidad: parseInt(productQuantity),
        precio: parseFloat(productPrice)
    }

    // Incrementar el ID para la próxima producto

    // Agregar la producto al array
    objetos.push(producto);

    // Limpiar los campos del formulario
    document.getElementById("product-name").value = "";
    document.getElementById("product-quantity").value = "";
    document.getElementById("product-price").value = "";

    // Actualizar la tabla
    updateTable(objetos);

    return
}
