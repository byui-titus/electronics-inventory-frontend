import { getDashboard } from './main';

async function loadDashboard() {

    try {

        const data = await getDashboard();

        document.getElementById('totalProducts')
            .textContent = data.totalProducts;

        document.getElementById('lowStockProducts')
            .textContent = data.lowStockProducts;
    } catch (error) {

        console.error(error);

        alert("Could not load dashboard data.");
    }
}

loadDashboard();