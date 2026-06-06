const API = "https://electronics-inventory-backend.onrender.com/products";

async function loadElectronics() {
    const res = await fetch(API);
    const products = await res.json();

    const electronics = products.filter(p => p.group === "Electronic");

    const table = document.getElementById("electronicsTable");

    table.innerHTML = "";

    electronics.forEach(p => {
        table.innerHTML += `
            <tr>
                <td>${p.productName}</td>
                <td>${p.category}</td>
                <td>${p.brand}</td>
                <td>${p.group}</td>
                <td>${p.quantity}</td>
                <td>${p.sellingPrice}</td>
            </tr>
        `;
    });
}

loadElectronics();