import { getAllSales } from './main';

let allSales = [];

const table = document.getElementById('historyTable');

async function loadSales() {
  allSales = await getAllSales();
  render(allSales);
}

function render(data) {
  table.innerHTML = '';

  data.forEach(sale => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${sale.productName}</td>
      <td>${sale.quantitySold}</td>
      <td>UGX ${sale.revenue.toLocaleString()}</td>
      <td>UGX ${sale.profit.toLocaleString()}</td>
      <td>${new Date(sale.saleDate).toLocaleString()}</td>
    `;

    table.appendChild(row);
  });
}
loadSales();

window.setFilter = function(type) {

  const now = new Date();

  let filtered = [];

  if (type === 'today') {

    const start = new Date();
    start.setHours(0,0,0,0);

    filtered = allSales.filter(s =>
      new Date(s.saleDate) >= start
    );

  }

  else if (type === 'week') {

    const start = new Date();
    start.setDate(now.getDate() - 7);

    filtered = allSales.filter(s =>
      new Date(s.saleDate) >= start
    );

  }

  else if (type === 'month') {

    const start = new Date();
    start.setMonth(now.getMonth() - 1);

    filtered = allSales.filter(s =>
      new Date(s.saleDate) >= start
    );

  }

  else {
    filtered = allSales;
  }

  render(filtered);
};