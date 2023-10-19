// Declarar un array para almacenar los productos
const productos = [];

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

    // Crear una nueva fila en la tabla
    const table = document.getElementById("product-table").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    // Insertar celdas en la fila
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    // Agregar datos a las celdas
    cell1.innerHTML = productName;
    cell2.innerHTML = productQuantity;
    cell3.innerHTML = productPrice;

    // Limpiar los campos del formulario
    document.getElementById("product-name").value = "";
    document.getElementById("product-quantity").value = "";
    document.getElementById("product-price").value = "";

    // Ocultar el formulario después de agregar el producto
    const form = document.getElementById("product-form");
    const button = document.getElementById("show-form-button");
    form.style.display = "none";
    button.innerText = "Añadir Producto";
}


function updateProductTable() {
    const table = document.getElementById("product-table").getElementsByTagName('tbody')[0];
    table.innerHTML = "";

    for (const product of productos) {
        const newRow = table.insertRow(table.rows.length);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerHTML = product.name;
        cell2.innerHTML = product.quantity;
        cell3.innerHTML = product.price;
    }
}



function shearchProduct() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const table = document.getElementsByTagName("table")[0];
    const rows = table.getElementsByTagName("tr");
  
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const nombreProducto = row.getElementsByTagName("td")[0].textContent.toLowerCase();
      
      if (nombreProducto.includes(searchInput)) {
        const cantidad = row.getElementsByTagName("td")[1].textContent;
        const precio = row.getElementsByTagName("td")[2].textContent;
        alert(`Nombre del Producto: ${nombreProducto}\nCantidad: ${cantidad}\nPrecio: ${precio}`);
        return; // Sale del bucle después de encontrar el primer producto
      }
    }
  
    // Si no se encuentra el producto, muestra una alerta de error
    alert("Producto no encontrado.");
  }


  
