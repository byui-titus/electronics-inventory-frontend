import { getDashboard } from './main';

async function loadDashboard() {

    try {

        const data = await getDashboard();

        document.getElementById('totalProducts')
            .textContent = data.totalProducts;

        document.getElementById('lowStockProducts')
            .textContent = data.lowStockProducts;

        document.getElementById('totalRevenue')
            .textContent = data.totalRevenue;

        document.getElementById('totalProfit')
            .textContent = data.totalProfit;

    } catch (error) {

        console.error(error);

        alert("Could not load dashboard data.");
    }
}

loadDashboard();