let idCount = 1;

// Crear un array para almacenar las camisetas
const camisetasArray = [];

function showForm() {
    const form = document.getElementById("product-form");
    const button = document.getElementById("show-form-button");

    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
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

    // Crear un objeto "camiseta"
    const camiseta = {
        id: idCount,
        nombre: productName,
        cantidad: parseInt(productQuantity),
        precio: parseFloat(productPrice)
    };

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
    camisetasArray.forEach(camiseta => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const quantityCell = document.createElement("td");
        const priceCell = document.createElement("td");


        idCell.textContent = camiseta.id;
        nameCell.textContent = camiseta.nombre;
        quantityCell.textContent = camiseta.cantidad;
        priceCell.textContent = camiseta.precio;


        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);

        tableBody.appendChild(row);
    });
}
