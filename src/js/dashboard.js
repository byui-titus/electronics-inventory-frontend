import {
    getDashboard,
    getProducts
} from './main';


// ============================================
// LOAD DASHBOARD
// ============================================

async function loadDashboard() {

    try {

        // Get dashboard information
        const data = await getDashboard();

        // -------------------------------
        // PRODUCTS
        // -------------------------------

        document.getElementById(
            'totalProducts'
        ).textContent =
            data.totalProducts;


        // -------------------------------
        // LOW STOCK
        // -------------------------------

        document.getElementById(
            'lowStockProducts'
        ).textContent =
            data.lowStockProducts;


        // -------------------------------
        // REVENUE
        // -------------------------------

        document.getElementById(
            'dashboardRevenue'
        ).textContent =
            `UGX ${(data.totalRevenue || 0).toLocaleString()}`;


        // -------------------------------
        // PROFIT
        // -------------------------------

        document.getElementById(
            'dashboardProfit'
        ).textContent =
            `UGX ${(data.totalProfit || 0).toLocaleString()}`;


    } catch (error) {

        console.error(error);

        alert(
            "Could not load dashboard data."
        );

    }

}


// ============================================
// LOAD INVENTORY GROUPS
// ============================================

async function loadInventoryGroups() {

    try {

        const products = await getProducts();


       const electronics =
    products.filter(
        product =>
            product.group === 'electronic'
    ).length;

const accessories =
    products.filter(
        product =>
            product.group === 'accessory'
    ).length;


        const total =
            electronics + accessories;


        // -------------------------------
        // DISPLAY COUNTS
        // -------------------------------

        document.getElementById(
            'electronicsCount'
        ).textContent =
            electronics;


        document.getElementById(
            'accessoriesCount'
        ).textContent =
            accessories;


        // -------------------------------
        // PROGRESS BARS
        // -------------------------------

        if (total > 0) {

            const electronicsPercent =
                (electronics / total) * 100;

            const accessoriesPercent =
                (accessories / total) * 100;


            document.getElementById(
                'electronicsProgress'
            ).style.width =
                `${electronicsPercent}%`;


            document.getElementById(
                'accessoriesProgress'
            ).style.width =
                `${accessoriesPercent}%`;

        }

    } catch (error) {

        console.error(
            'Could not load inventory groups:',
            error
        );

    }

}


// ============================================
// DATE & TIME
// ============================================

function updateDateTime() {

    const now = new Date();


    const date =
        now.toLocaleDateString(
            undefined,
            {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
        );


    const time =
        now.toLocaleTimeString(
            undefined,
            {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }
        );


    document.getElementById(
        'dashboardDate'
    ).textContent = date;


    document.getElementById(
        'dashboardTime'
    ).textContent = time;

}


// ============================================
// START DASHBOARD
// ============================================

loadDashboard();

loadInventoryGroups();

updateDateTime();


// Update clock every second

setInterval(
    updateDateTime,
    1000
);