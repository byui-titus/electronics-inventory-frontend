import { getProducts } from './main';
import { sellProduct } from './main.js';

const tableBody = document.getElementById('productsTable');
const searchInput = document.getElementById('searchInput');

const API_BASE =
  'https://electronics-inventory-backend.onrender.com';

async function loadProducts() {
  try {
    const products = await getProducts();
    displayProducts(products);
  } catch (error) {
    console.error(error);
  }
}

function displayProducts(products) {
  tableBody.innerHTML = '';

  products.forEach(product => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${product.productName}</td>
      <td>${product.brand}</td>
      <td>${product.category}</td>
      
      <td>
    ${
       product.quantity === 0
         ? '<span class="out-stock">Out of Stock</span>'
         : product.quantity <= 3
           ? '<span class="low-stock">Low Stock</span>'
           : product.quantity
     }
    </td>
      <td>${product.group}</td>
      <td>${product.sellingPrice}</td>
      <td>
        <button class="edit-btn" data-id="${product._id}">
          Edit
        </button>
        <button class="sell-btn" data-id="${product._id}">
          Sell
        </button>
        <button class="delete-btn" data-id="${product._id}">
          Delete
        </button>
      </td>
    `;

    tableBody.appendChild(row);
  });

  attachDeleteEvents();
  attachEditEvents();
  attachSellEvents();
}

async function deleteProduct(id) {
  try {
    const response = await fetch(
      `${API_BASE}/Products/${id}`,
      {
        method: 'DELETE'
      }
    );

    if (!response.ok) {
      throw new Error('Failed to delete product');
    }

    loadProducts();

  } catch (error) {
    console.error(error);
    alert('Could not delete product');
  }
  
}

function attachDeleteEvents() {
  const deleteButtons =
    document.querySelectorAll('.delete-btn');

  deleteButtons.forEach(button => {
    button.addEventListener('click', () => {

      const row = button.closest('tr');
      const productName =
        row.children[0].textContent;

      const confirmed = confirm(
        `Delete "${productName}"?`
      );

      if (!confirmed) return;

      const id = button.dataset.id;

      deleteProduct(id);
    });
  });
} 

async function searchProducts(query) {
  try {
    const response = await fetch(
      `${API_BASE}/products/search?q=${query}`
    );

    const products = await response.json();

    displayProducts(products);

  } catch (error) {
    console.error(error);
  }
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();

  if (!query) {
    loadProducts();
    return;
  }

  searchProducts(query);
});

loadProducts();

function attachEditEvents() {
  const editButtons =
    document.querySelectorAll('.edit-btn');

  editButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.id;

      window.location.href =
        `edit-product.html?id=${id}`;
    });
  });
}

function attachSellEvents() {

  const sellButtons =
    document.querySelectorAll('.sell-btn');

  sellButtons.forEach(button => {

    button.addEventListener('click', async () => {

      const id = button.dataset.id;

      const quantitySold = prompt(
        'Enter quantity sold'
      );

      if (!quantitySold) return;

      try {

            const result = await sellProduct(
              id,
              Number(quantitySold)
            );

            localStorage.setItem(
              'lastSale',
              JSON.stringify(result.sale)
            );

            window.location.href = '../receipt.html';

          } catch (error) {

            console.error(error);

            alert('Failed to record sale');
          }

    });

  });

}