import { camisetasArray } from "./productos.js";

document.addEventListener("DOMContentLoaded", function () {
    const showFormButton = document.getElementById("show-form-button");
    const addProductButton = document.getElementById("add-product-button");
    const searchButton = document.getElementById("searchButton");

    showFormButton.addEventListener("click", showForm);
    addProductButton.addEventListener("click", addProduct);
    searchButton.addEventListener("click", searchProduct);
});


let idCount = 6;

function showForm() {
    const form = document.getElementById("product-form");
    const button = document.getElementById("show-form-button");

    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "inline";
        button.innerText = "Cancelar";
    } else {
        form.style.display = "none";
        button.innerText = "Añadir Producto";
    }
}

function addProduct() {
    const productName = document.getElementById("product-name").value;
    const productQuantity = document.getElementById("product-quantity").value;
    const productPrice = document.getElementById("product-price").value;

    // Validar que se hayan ingresado valores
    if (!productName || !productQuantity || !productPrice) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const camiseta = {
        id: idCount,
        nombre: productName,
        cantidad: parseInt(productQuantity),
        precio: parseFloat(productPrice)
    }

    // Incrementar el ID para la próxima camiseta
    idCount++;

    // Agregar la camiseta al array
    camisetasArray.push(camiseta);

    // Limpiar los campos del formulario
    document.getElementById("product-name").value = "";
    document.getElementById("product-quantity").value = "";
    document.getElementById("product-price").value = "";

    // Actualizar la tabla
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Limpiar la tabla

    // Recorrer el array de camisetas y agregar cada una a la tabla
    camisetasArray.forEach(element => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const priceCell = document.createElement("td");

        const editCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.innerHTML = "Editar";
        editButton.className = "editButton"

        const delCell = document.createElement("td");
        const delButton = document.createElement("button");
        delButton.innerHTML = "Eliminar";

        idCell.textContent = element.id;
        nameCell.textContent = element.nombre;
        quantityCell.textContent = element.cantidad;
        priceCell.textContent = element.precio;

        // Agregar evento para el botón de editar
        editButton.addEventListener("click", () => {
            editProduct(element.id, nameCell, quantityCell, priceCell, editButton);
        });

        // Agregar evento para el botón de eliminar
        delButton.addEventListener("click", () => {
            const id = element.id;
            deleteProduct(id)
            console.log("Eliminar elemento con ID " + element.id);
        });

        editCell.appendChild(editButton);
        delCell.appendChild(delButton);

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        row.appendChild(editCell);
        row.appendChild(delCell);

        tableBody.appendChild(row);
    });
}

updateTable()

function deleteProduct(id) {
    const index = camisetasArray.findIndex(product => product.id === id);
    if (index !== -1) {
        camisetasArray.splice(index, 1); // Elimina el elemento del array
        updateTable(); // Actualiza la tabla después de la eliminación
    }
}

//esta funcion nos permite editar el producto directamente en la tabala
function editProduct(id, nameCell, quantityCell, priceCell, editButton) {
    // Habilita la edición de los campos de nombre, cantidad y precio
    nameCell.contentEditable = true;
    quantityCell.contentEditable = true;
    priceCell.contentEditable = true;

    // Cambia el botón "Editar" a "Guardar Cambios"
    editButton.innerHTML = "Guardar Cambios";
    editButton.className= "saveButton"
    editButton.removeEventListener("click", editProduct);
    editButton.addEventListener("click", () => {
        saveProduct(id, nameCell, quantityCell, priceCell, editButton);
    });
}


function saveProduct(id, nameCell, quantityCell, priceCell, editButton) {
    // Guarda los cambios en el array de productos
    const product = camisetasArray.find(product => product.id === id);
    if (product) {
        product.nombre = nameCell.textContent;
        product.cantidad = parseInt(quantityCell.textContent);
        product.precio = parseFloat(priceCell.textContent);
    }

    // Deshabilita la edición de los campos
    nameCell.contentEditable = false;
    quantityCell.contentEditable = false;
    priceCell.contentEditable = false;

    // Cambia el botón de "Guardar Cambios" a "Editar"
    editButton.innerHTML = "Editar";
    editButton.className = "editButton"
    editButton.removeEventListener("click", saveProduct);
    editButton.addEventListener("click", () => {
        editProduct(id, nameCell, quantityCell, priceCell, editButton);
    });
}


// Función para buscar un producto por su nombre
function searchProduct() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const foundProducts = camisetasArray.filter(product => product.nombre.toLowerCase().includes(searchInput));

    if (foundProducts.length > 0) {
        const productId = foundProducts.map(product => product.id);
        const productName = foundProducts.map(product => product.nombre);
        const productQuantity = foundProducts.map(product => product.cantidad);
        const productPrice = foundProducts.map(product => product.precio);

        alert(`Productos encontrados:\nId: ${productId} \tNombre: ${productName} \tCantidad ${productQuantity} \tPrecio: ${productPrice}\n`);
    } else {
        alert("No se encontraron productos con ese nombre.");
    }

    searchInput.value = "";
}