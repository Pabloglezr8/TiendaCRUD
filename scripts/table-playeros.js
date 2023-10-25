import { playerosArray } from "./productos.js";


const listCami = () => {
    const tableBody = document.getElementById("table-body")

    playerosArray.forEach(element => {
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