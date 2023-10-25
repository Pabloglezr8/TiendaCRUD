import { camisetasArray } from "./productos.js";
import { addProduct} from "./add-product.js";

addProduct(camisetasArray);

document.addEventListener("DOMContentLoaded", function() {
 addProduct();
})