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

        revenueAmount =
            `UGX ${(data.totalRevenue || 0).toLocaleString()}`;


        // -------------------------------
        // PROFIT
        // -------------------------------

        profitAmount =
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
            product.group === 'Electronic'
    ).length;

const accessories =
    products.filter(
        product =>
            product.group === 'Accessory'
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
// HIDE / SHOW REVENUE AND PROFIT
// ============================================

let revenueVisible = false;
let profitVisible = false;

let revenueAmount = "UGX 0";
let profitAmount = "UGX 0";


// --------------------------------------------
// REVENUE CARD
// --------------------------------------------

const revenueCard =
    document.getElementById('revenueCard');

const revenueDisplay =
    document.getElementById('dashboardRevenue');


revenueCard.addEventListener('click', () => {

    revenueVisible = !revenueVisible;

    if (revenueVisible) {

        revenueDisplay.textContent =
            revenueAmount;

        revenueCard.querySelector(
            '.private-hint'
        ).textContent = 'Click to hide';

    } else {

        revenueDisplay.textContent =
            '••••••••';

        revenueCard.querySelector(
            '.private-hint'
        ).textContent = 'Click to view';

    }

});


// --------------------------------------------
// PROFIT CARD
// --------------------------------------------

const profitCard =
    document.getElementById('profitCard');

const profitDisplay =
    document.getElementById('dashboardProfit');


profitCard.addEventListener('click', () => {

    profitVisible = !profitVisible;

    if (profitVisible) {

        profitDisplay.textContent =
            profitAmount;

        profitCard.querySelector(
            '.private-hint'
        ).textContent = 'Click to hide';

    } else {

        profitDisplay.textContent =
            '••••••••';

        profitCard.querySelector(
            '.private-hint'
        ).textContent = 'Click to view';

    }

});


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