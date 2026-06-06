import { createProduct } from './main';

const form =
  document.getElementById('productForm');

form.addEventListener('submit', async (e) => {

  e.preventDefault();

  const product = {
    productName:
      document.getElementById('productName').value,

    category:
      document.getElementById('category').value,

    brand:
      document.getElementById('brand').value,

    group:
        document.getElementById('group').value,

    quantity: Number(
      document.getElementById('quantity').value
    ),

    buyingPrice: Number(
      document.getElementById('buyingPrice').value
    ),

    sellingPrice: Number(
      document.getElementById('sellingPrice').value
    )
  };

  try {

    await createProduct(product);

    alert('Product added successfully');

    form.reset();

  } catch (error) {

    console.error(error);

    alert('Failed to add product');
  }

});