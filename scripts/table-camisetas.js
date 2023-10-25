import { camisetasArray } from "./productos.js";

export const listCami = () => {
    const tableBody = document.getElementById("table-body");

    camisetasArray.forEach(element => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const priceCell = document.createElement("td");

        const editCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.innerHTML = "Editar";

        const delCell = document.createElement("td");
        const delButton = document.createElement("button");
        delButton.innerHTML = "Eliminar";

        idCell.textContent = element.id;
        nameCell.textContent = element.nombre;
        quantityCell.textContent = element.cantidad;
        priceCell.textContent = element.precio;

        // Agregar evento para el botón de editar
        editButton.addEventListener("click", () => {
            // Agregar aquí la lógica para editar el elemento
            console.log("Editar elemento con ID " + element.id);
        });

        // Agregar evento para el botón de eliminar
        delButton.addEventListener("click", () => {
            // Agregar aquí la lógica para eliminar el elemento
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
};

document.addEventListener("DOMContentLoaded", function() {
    listCami();
});
