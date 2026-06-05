import { updateProduct } from './main';

const form = document.getElementById('editForm');

const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const API_BASE =
  'https://electronics-inventory-backend.onrender.com';

// 1. Load existing product data
async function loadProduct() {
  const response = await fetch(
    `${API_BASE}/products/${productId}`
  );

  const product = await response.json();

  document.getElementById('productName').value = product.productName;
  document.getElementById('category').value = product.category;
  document.getElementById('brand').value = product.brand;
  document.getElementById('quantity').value = product.quantity;
  document.getElementById('buyingPrice').value = product.buyingPrice;
  document.getElementById('sellingPrice').value = product.sellingPrice;
}

loadProduct();

// 2. Submit update
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const updatedProduct = {
    productName: document.getElementById('productName').value,
    category: document.getElementById('category').value,
    brand: document.getElementById('brand').value,
    quantity: Number(document.getElementById('quantity').value),
    buyingPrice: Number(document.getElementById('buyingPrice').value),
    sellingPrice: Number(document.getElementById('sellingPrice').value)
  };

  try {
    await updateProduct(productId, updatedProduct);

    alert('Product updated successfully');

    window.location.href = '../product.html';

  } catch (error) {
    console.error(error);
    alert('Failed to update product');
  }
});