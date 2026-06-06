const sale = JSON.parse(localStorage.getItem("lastSale"));

if (sale) {
    document.getElementById("receiptNumber").textContent =
        "REC-" + Date.now();

    document.getElementById("date").textContent =
        new Date(sale.saleDate).toLocaleString();

    document.getElementById('customerName').textContent = 
        sale.customerName;

    document.getElementById("product").textContent =
        sale.productName;

    document.getElementById("quantity").textContent =
        sale.quantitySold;

    document.getElementById("price").textContent =
        sale.unitPrice;

    document.getElementById("total").textContent =
        sale.revenue;
}