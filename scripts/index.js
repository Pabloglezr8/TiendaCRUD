//Autor: Pablo Gonzalez Ruiz
// https://github.com/Pabloglezr8/TiendaCRUD.git


import { objeto } from "./productos.js";

//al ser un archivo module es necesario cargar los botones a utilizar para que se pueda llamar a las funciones
document.addEventListener("DOMContentLoaded", function () {
    const showFormButton = document.getElementById("show-form-button");
    const addProductButton = document.getElementById("add-product-button");
    const searchButton = document.getElementById("searchButton");

    showFormButton.addEventListener("click", showForm);
    addProductButton.addEventListener("click", addProduct);
    searchButton.addEventListener("click", searchProduct);
});

function updateTable() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Limpiar la tabla

    // Recorrer el array de camisetas y agregar cada una a la tabla
    objeto.forEach(element => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const priceCell = document.createElement("td");

        const editCell = document.createElement("td");
        editCell.className = "cellButton"
        const editButton = document.createElement("button");
        editButton.innerHTML = "Editar";
        editButton.className = "tableButton"

        const delCell = document.createElement("td");
        delCell.className = "cellButton"
        const delButton = document.createElement("button");
        delButton.innerHTML = "Eliminar";
        delButton.className = "tableButton"

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
        });

        editCell.appendChild(editButton);
        delCell.appendChild(delButton);

        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        row.appendChild(editCell);
        row.appendChild(delCell);

        tableBody.appendChild(row);
    });
}

updateTable()


let idCount = 8;

//función que nos permite desplegar el formulario donde se ingresan 
//las características de nuetro producto y el boton de añadir productopara insertarlo en la tabla
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


//función agregada al boton añadir producto que ingresa un objeto camiseta a la tabla
function addProduct() {
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

    const camiseta = {
        id: idCount,
        nombre: productName,
        cantidad: parseInt(productQuantity),
        precio: parseFloat(productPrice) + "€"
    }

    // Incrementar el ID para la próxima camiseta
    idCount++;

    // Agregar la camiseta al array
    objeto.push(camiseta);

    // Limpiar los campos del formulario
    document.getElementById("product-name").value = "";
    document.getElementById("product-quantity").value = "";
    document.getElementById("product-price").value = "";

    // Actualizar la tabla
    updateTable();
}


function deleteProduct(id) {
    const index = objeto.findIndex(product => product.id === id);
    if (index !== -1) {
        objeto.splice(index, 1); // Elimina el elemento del array
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
    editButton.className = "saveButton"
    editButton.removeEventListener("click", editProduct);

    editButton.addEventListener("click", () => {
        saveProduct(id, nameCell, quantityCell, priceCell, editButton);
    });
}

//funcion validar los cambios en las características del producto y guardarlos en el array
function saveProduct(id, nameCell, quantityCell, priceCell, editButton) {
    // Guarda los cambios en el array de productos

    const product = objeto.find(product => product.id === id);
    if (product) {
        product.nombre = nameCell.textContent;
    }else{
        alert(">El campo nombre no puede estar vacío")
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

        // Cambia el botón de "Guardar Cambios" a "Editar"
        editButton.innerHTML = "Editar";
        editButton.className = "tableButton"
        editButton.removeEventListener("click", saveProduct);
        editButton.addEventListener("click", () => {
            editProduct(id, nameCell, quantityCell, priceCell, editButton);
        });
        return;
    }
}


// Función para buscar un producto por su nombre
function searchProduct() {
    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();

    // Verificar si el campo de entrada está vacío
    if (searchInput === "") {
        alert("Por favor, ingrese un término de búsqueda.");
        return;
    }

    const foundProducts = objeto.filter(product => product.nombre.toLowerCase().includes(searchInput));

    if (foundProducts.length > 0) {
        const productId = foundProducts.map(product => product.id);
        const productName = foundProducts.map(product => product.nombre);
        const productQuantity = foundProducts.map(product => product.cantidad);
        const productPrice = foundProducts.map(product => product.precio);

        alert(`Productos encontrados:\nId: ${productId}     Nombre: ${productName}     Cantidad: ${productQuantity}     Precio: ${productPrice}\n`);
    } else {
        alert("No se encontraron productos con ese nombre.");
    }

    searchInput.value = "";
}
