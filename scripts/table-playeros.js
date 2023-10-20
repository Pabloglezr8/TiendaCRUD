import { playerosArray } from "./productos.js";


const listCami = () => {
    const tableBody = document.getElementById("table-body")

    playerosArray.forEach(element => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const priceCell = document.createElement("td");
        
        idCell.textContent = element.id;
        nameCell.textContent = element.nombre;
        quantityCell.textContent = element.cantidad;
        priceCell.textContent = element.precio;
        
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        
        tableBody.appendChild(row);
    });
};

document.addEventListener("DOMContentLoaded", function() {
    listCami();
});