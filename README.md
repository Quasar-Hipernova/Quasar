# CarsCrud - Car Rental Management System.

A modern and responsive car rental management web application built with HTML, CSS, and JavaScript. CarsCrud provides a complete solution for managing car rentals with a public-facing landing page and an admin dashboard.

![CarsCrud Logo](Landingpage/img/CarsCrud-logo.png)

## Features

### Landing Page (Public).
- **Hero Section**: Attractive introduction with featured cars.
- **Car Catalog**: Display of popular and recommended cars.
- **Search Functionality**: Real-time search for cars.
- **Responsive Design**: Optimized for all devices.
- **User Authentication**: Quick access to admin login.

### Admin Dashboard.
- **Dashboard Overview**: View sales, active users, and pending orders.
- **Car Management**: Full CRUD operations (Create, Read, Update, Delete).
- **User Management**: Manage system users and roles.
- **Sales Tracking**: Monitor sales history and details.
- **Product Management**: Add new vehicles to the catalog.
- **Settings**: System configuration options.

### Authentication.
- **Secure Login**: Admin authentication system.
- **Session Management**: Uses sessionStorage for login state.
- **Protected Routes**: Dashboard access restricted to authenticated admins.

## Getting Started.

### Prerequisites.

- A modern web browser (Chrome, Firefox, Edge, Safari).
- No backend required - runs entirely in the browser.

### Installation.

1. Clone or download the project:
```bash
git clone <repository-url>
cd "Quasar - CarsCrud"
```

2. Open `index.html` in your web browser:
```bash
open index.html
```

## Usage.

### Landing Page.
1. Browse the **Popular Cars** and **Recommendation Cars** sections.
2. Use the search bar to find specific car models.
3. Click on the profile icon in the header to access the admin login.

### Admin Dashboard.
1. Log in with admin credentials.
2. Navigate through sections using the sidebar:
   - **Dashboard**: View system statistics.
   - **Table**: Manage car inventory (edit, delete, view details).
   - **Users**: Manage user accounts.
   - **Sales**: Track sales data.
   - **Products**: Add new vehicles.
   - **Settings**: Configure system settings.

### Managing Cars.
1. Go to the **Products** section.
2. Fill in the vehicle details:
   - Car name.
   - Vehicle type (Sedan, SUV, Sport, etc).
   - Price per day.
   - Fuel capacity.
   - Passenger capacity.
   - Section (Popular or Recommendation).
   - Car image.
3. Click "Publicar Vehículo" to add the car.

## Technologies Used.

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure and semantics |
| **CSS3** | Styling and responsive design |
| **JavaScript** | Client-side functionality |
| **Bootstrap 5** | UI components and grid system |
| **Font Awesome** | Icons and UI elements |
| **SweetAlert2** | Beautiful alerts and modals |

## Screenshots.

### Landing Page.
- Hero section with featured cars.
- Search functionality.
- Car catalog with pricing.
- Footer with navigation links.

### Admin Dashboard.
- Statistics cards (Sales, Users, Orders).
- Car table with CRUD operations.
- Sidebar navigation.
- Responsive design.

### Login Page.
- Clean, modern login form.
- Email and password fields.
- Animated avatars.

## Security Notes

- This application uses client-side authentication for demonstration.
- SessionStorage is used for login state (cleared on browser close).
- For production, implement proper backend authentication.
- Never expose sensitive credentials in client-side code.

## Project Structure

```
Quasar - CarsCrud/
├── index.html                 # Main landing page
├── README.md                  # This file
├── Dashboard/
│   ├── index.html            # Admin dashboard
│   ├── style.css             # Dashboard styles
│   ├── script.js             # Dashboard functionality
│   ├── buttons.js            # Button event handlers
│   ├── form.js               # Form handling
│   └── img/                  # Dashboard images
├── Landingpage/
│   ├── style.css             # Landing page styles
│   ├── script.js             # Landing page functionality
│   └── img/                  # Landing page images & car photos
└── Login/
    ├── login.html            # Login page
    ├── login.css             # Login page styles
    ├── login.js              # Login functionality
    └── img/                  # Login page images
```