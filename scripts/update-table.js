import { editProduct, saveProduct } from "./edit-product.js";

export function updateTable(objetos) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Limpiar la tabla
    let idCount = 0;
    // Recorrer el array de camisetas y agregar cada una a la tabla
    objetos.forEach(element => {
        idCount++

        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const priceCell = document.createElement("td");

        const editCell = document.createElement("td");
        editCell.className = "cellButton"

        const editButton = document.createElement("button");
        editButton.innerHTML = "Editar";
        editButton.id = "editButton"
        editButton.className = "tableButton"

        // Agregar evento para el botón de editar

        const saveButton = document.createElement("button");
        saveButton.innerHTML = "Aceptar";
        saveButton.id = "saveButton"
        saveButton.className = "tableButton"
        saveButton.style.display = "none"

        const delCell = document.createElement("td");
        delCell.className = "cellButton"
        const delButton = document.createElement("button");
        delButton.innerHTML = "Eliminar";
        delButton.id = "delButton"
        delButton.className = "tableButton"

        //función para eliminar el producto
        row.setAttribute("data-id", element.id);

        element.id = idCount;
        console.log(element.id + "    " + element.nombre + "    " + element.cantidad + "    " + element.precio + "\n")
        
        nameCell.textContent = element.nombre;
        quantityCell.textContent = element.cantidad;
        priceCell.textContent = element.precio;
        
        editCell.appendChild(editButton);
        editCell.appendChild(saveButton);
        delCell.appendChild(delButton);
        
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        row.appendChild(editCell);
        row.appendChild(delCell);
        
        tableBody.appendChild(row);
        
        delButton.addEventListener("click", () => {
            const confirmed = window.confirm("¿Quieres borrar este producto?");
            if (confirmed) {
                const index = objetos.findIndex(product => product.id === element.id);
                if (index !== -1) {
                    objetos.splice(index, 1);
                }
                row.remove();
            }
            updateTable(objetos)
    
        });

        editButton.addEventListener("click", () => {
            editProduct(nameCell, quantityCell, priceCell);

            saveButton.style.display = "inline"
            editButton.style.display = "none"

        })
        
        saveButton.addEventListener("click", () => {
            saveProduct(element.id, nameCell, quantityCell, priceCell)
            
            if (!saveProduct) {
                saveButton.style.display = "none"
                editButton.style.display = "inline"
            }
            
        })
    });
}