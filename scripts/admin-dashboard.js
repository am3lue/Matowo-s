document.addEventListener('DOMContentLoaded', () => {
    // Sidebar menu items
    const menuDashboard = document.getElementById('menu-dashboard');
    const menuDepartments = document.getElementById('menu-departments');
    const menuUsers = document.getElementById('menu-users');
    const menuInventory = document.getElementById('menu-inventory');
    const menuSales = document.getElementById('menu-sales');

    // Content sections
    const sectionDashboard = document.getElementById('section-dashboard');
    const sectionDepartments = document.getElementById('section-departments');
    const sectionUsers = document.getElementById('section-users');
    const sectionInventory = document.getElementById('section-inventory');
    const sectionSales = document.getElementById('section-sales');

    // Function to hide all sections
    function hideAllSections() {
        sectionDashboard.style.display = 'none';
        sectionDepartments.style.display = 'none';
        sectionUsers.style.display = 'none';
        sectionInventory.style.display = 'none';
        sectionSales.style.display = 'none';
    }

    // Function to remove active class from all menu items
    function clearActiveMenu() {
        menuDashboard.classList.remove('active');
        menuDepartments.classList.remove('active');
        menuUsers.classList.remove('active');
        menuInventory.classList.remove('active');
        menuSales.classList.remove('active');
    }

    // Event listeners for menu items
    menuDashboard.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllSections();
        sectionDashboard.style.display = 'block';
        clearActiveMenu();
        menuDashboard.classList.add('active');
    });

    menuDepartments.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllSections();
        sectionDepartments.style.display = 'block';
        clearActiveMenu();
        menuDepartments.classList.add('active');
    });

    menuUsers.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllSections();
        sectionUsers.style.display = 'block';
        clearActiveMenu();
        menuUsers.classList.add('active');
    });

    menuInventory.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllSections();
        sectionInventory.style.display = 'block';
        clearActiveMenu();
        menuInventory.classList.add('active');
    });

    menuSales.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllSections();
        sectionSales.style.display = 'block';
        clearActiveMenu();
        menuSales.classList.add('active');
    });

    // Initialize - show dashboard section by default
    hideAllSections();
    sectionDashboard.style.display = 'block';
    clearActiveMenu();
    menuDashboard.classList.add('active');
});
