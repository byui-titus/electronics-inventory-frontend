const API = "https://electronics-inventory-backend.onrender.com/products";

async function loadAccessories() {
    const res = await fetch(API);
    const products = await res.json();

    const accessories = products.filter(p => p.group === "Accessory");

    const table = document.getElementById("accessoriesTable");

    table.innerHTML = "";

    accessories.forEach(p => {
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

loadAccessories();