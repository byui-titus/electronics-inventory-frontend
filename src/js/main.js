const API_BASE =
  "https://electronics-inventory-backend.onrender.com";

export async function getDashboard() {

    const response = await fetch(
        `${API_BASE}/Sales/dashboard`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch dashboard");
    }

    return await response.json();

}

export async function getProducts() {
    const response = await fetch(
        `${API_BASE}/products`
    );

    return await response.json();
}

export async function createProduct(product) {
  const response = await fetch(
    `${API_BASE}/products`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }
  );

  // If backend sends 204, return a manual success object instead of calling .json()
  if (response.status === 204) {
    return { success: true };
  }

  return await response.json();
}

export async function updateProduct(id, product) {
  const response = await fetch(
    `${API_BASE}/products/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }
  );

  if (response.status === 204) {
    return { success: true};
  }
  return await response .json();
}