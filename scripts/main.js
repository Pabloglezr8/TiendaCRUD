//Autor: Pablo Gonzalez Ruiz
// https://github.com/Pabloglezr8/TiendaCRUD.git


import { objetos } from "./productos.js";
import { addProduct } from "./add-product.js";
import { updateTable } from "./update-table.js";

//al ser un archivo module es necesario cargar los botones a utilizar para que se pueda llamar a las funciones
document.addEventListener("DOMContentLoaded", function () {
    const showFormButton = document.getElementById("show-form-button");
    const addProductButton = document.getElementById("add-product-button");
    const searchButton = document.getElementById("searchButton");

    showFormButton.addEventListener("click", showForm);
    addProductButton.addEventListener("click", addProduct);
    searchButton.addEventListener("click", searchProduct);
});

updateTable(objetos)


//función que nos permite desplegar el formulario donde se ingresan 
//las características de nuetro producto y el boton de añadir productopara insertarlo en la tabla
function showForm() {

    document.addEventListener("DOMContentLoaded", function () {
        const addProductButton = document.getElementById("add-product-button");
        addProductButton.addEventListener("click", addProduct);
    });

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

function searchProduct() {

    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();

    const foundProducts = objetos.filter(product => product.nombre.toLowerCase().includes(searchInput));

    if (foundProducts.length === 0) {
        alert("Producto no encontrado");
    } else {

        const cleanTable = document.getElementById("table-body")
        cleanTable.textContent = "";

        updateTable(foundProducts);
    }

}
