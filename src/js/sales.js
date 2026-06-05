import { getTodaySales } from './main';

const salesTable =
    document.getElementById('salesTable');

async function loadSales() {

    try {

        const sales =
            await getTodaySales();

        displaySales(sales);
        updateSummary(sales);

        displaySales(sales)

    } catch (error) {

        console.error(error);

        alert('Failed to load sales');
    }
}

function updateSummary(sales) {

    const totalSales =
        sales.reduce(
            (sum, sale) => sum + sale.quantitySold,
            0
        );

    const totalRevenue =
        sales.reduce(
            (sum, sale) => sum + sale.revenue,
            0
        );

    const totalProfit =
        sales.reduce(
            (sum, sale) => sum + sale.profit,
            0
        );

    document.getElementById('totalSales')
        .textContent = totalSales;

    document.getElementById('totalRevenue')
        .textContent =
        `UGX ${totalRevenue.toLocaleString()}`;

    document.getElementById('totalProfit')
        .textContent =
        `UGX ${totalProfit.toLocaleString()}`;
}

function displaySales(sales) {

    salesTable.innerHTML = '';

    sales.forEach(sale => {

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${sale.productName}</td>
            <td>${sale.quantitySold}</td>
            <td>UGX ${sale.revenue.toLocaleString()}</td>
            <td>UGX ${sale.profit.toLocaleString()}</td>
            <td>${new Date(sale.saleDate).toLocaleString()}</td>
        `;

        salesTable.appendChild(row);

    });
}

loadSales();