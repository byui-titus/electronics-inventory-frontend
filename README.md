# Electronics Inventory Management System

A web-based inventory management system designed for electronics and accessory shops. The system helps track products, manage stock levels, record sales, monitor profits, and generate sales reports.

---

## Features

### Dashboard
- View total products
- View low stock products
- Quick navigation to all system modules
- Usage instructions for new users

### Product Management
- Add new products
- Edit existing products
- Delete products
- Search products
- Track product quantities

### Product Groups
Products are organized into two groups:

- Electronic
- Accessory

Users select a group when adding or editing a product.

### Electronics Page
Displays only products belonging to the **Electronic** group.

### Accessories Page
Displays only products belonging to the **Accessory** group.

### Sales Management
- Record product sales
- Automatic stock reduction after sale
- Calculate revenue
- Calculate profit

### Sales History
Filter sales by:
- Today
- This Week
- This Month
- All Time

### Stock Monitoring
- Low stock alerts
- Out-of-stock tracking

---

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Deployment
- Render

---

## Project Structure

```
frontend/
│
├── index.html
├── product.html
├── add-product.html
├── edit-product.html
├── sales.html
├── sales-history.html
├── electronics.html
├── accessories.html
│
├── css/
│   └── style.css
│
└── js/
    ├── dashboard.js
    ├── products.js
    ├── add-product.js
    ├── edit-product.js
    ├── sales.js
    ├── sales-history.js
    ├── electronics.js
    └── accessories.js

backend/
│
├── controllers/
├── routes/
├── middleware/
├── config/
├── schemas/
├── utilities/
└── server.js
```

---

## API Endpoints

### Products

| Method | Endpoint | Description |
|----------|----------|----------|
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| POST | /products | Add product |
| PUT | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

### Sales

| Method | Endpoint | Description |
|----------|----------|----------|
| POST | /sales/sell/:id | Record a sale |
| GET | /sales/today | Get today's sales |
| GET | /sales/history | Get sales history |
| GET | /sales/profit | Get profit report |
| GET | /sales/dashboard | Get dashboard statistics |

---

## How To Use

### 1. Add Products
Navigate to **Add Product** and enter:
- Product Name
- Category
- Brand
- Group
- Quantity
- Buying Price
- Selling Price

### 2. Manage Products
Use the Products page to:
- Search products
- Edit products
- Delete products

### 3. Record Sales
Open the Sales page and sell available products.

The system automatically:
- Reduces stock quantity
- Calculates revenue
- Calculates profit

### 4. View Reports
Use Sales History to:
- Review transactions
- Monitor revenue
- Monitor profits
- Filter records by date

---

## Business Rules

### Profit Calculation

```
Profit = Selling Price - Buying Price
```

### Revenue Calculation

```
Revenue = Quantity Sold × Selling Price
```

### Low Stock

Products with low quantities are displayed in the dashboard for easier restocking.

---

## Future Improvements

- User authentication
- Role-based access control
- Export reports to PDF
- Export reports to Excel
- Charts and analytics
- Barcode support
- Receipt generation
- Supplier management

---

## Author

**Topaz Movies, Phone Accessories, and Software**

Electronics Inventory Management System

Built using Node.js, Express, MongoDB, HTML, CSS, and JavaScript.