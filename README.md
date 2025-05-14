# Matowo Hardware Management System

## Overview
Matowo Hardware Management System is a comprehensive web application designed to manage various departments of a hardware supply business. It provides dashboards for different departments, a login system, and informational pages, all styled with a consistent dark theme and responsive design.

## Features
- **Welcome Page:** A landing page introducing Matowo Hardware with smooth navigation.
- **Login System:** Secure login form with department selection to access respective dashboards.
- **Department Dashboards:** Separate dashboards for Admin, Cement, Electrical, Plumbing, and Tools departments, each featuring:
  - Sidebar navigation with quick links.
  - Summary statistics cards.
  - Interactive charts powered by Chart.js.
  - Product listings with stock status and actions.
  - Recent sales tables.
- **About Page:** Information about the company, team members, and contact details.
- **Consistent UI:** Unified navbar and sidebar navigation across pages.
- **Responsive Design:** Optimized for various screen sizes and devices.
- **Dark Theme:** Modern dark color scheme for comfortable viewing.

## Technologies Used
- HTML5, CSS3 (with external stylesheets for modularity)
- JavaScript (including Chart.js for data visualization)
- Font Awesome for icons
- Responsive design principles

## Project Structure
- `index.html` - Welcome page
- `login.html` - Login page
- `about.html` - About us page
- Department dashboards:
  - `admin-dashboard.html`
  - `cement-dashboard.html`
  - `electrical-dashboard.html`
  - `plumbing-dashboard.html`
  - `tools-dashboard.html`
- `styles/` - CSS files including:
  - `main.css` - Common styles and dark theme
  - `dashboard.css` - Dashboard layout and components
  - Department-specific CSS files (e.g., `cement-dashboard.css`)
  - Page-specific CSS files (e.g., `welcome.css`, `login.css`, `about.css`)
- `scripts/` - JavaScript files for page functionality and charts
- `images/` - Image assets for products, team members, and icons

## Setup and Usage
1. Clone or download the repository.
2. Open the project folder in a web server environment or directly open the HTML files in a modern web browser.
3. Navigate through the pages using the navbar or sidebar.
4. Use the login page to access department-specific dashboards (authentication logic to be implemented as needed).
5. View and interact with charts and product listings on dashboards.

## Future Enhancements
- Implement backend authentication and data management.
- Add real-time data updates and notifications.
- Integrate interactive maps on the About page.
- Enhance accessibility features.
- Optimize performance and SEO.

## License
This project is open source and available under the MIT License.

## Contact
For questions or support, contact Matowo Hardware at info@matowohardware.co.ke.

---
Matowo Hardware Management System © 2024
