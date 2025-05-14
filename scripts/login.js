document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const department = document.getElementById('department').value;
        
        // In a real application, this would be an API call to authenticate
        console.log('Login attempt:', { username, department });
        
        // For demonstration purposes, we'll use hardcoded credentials
        // In a real app, this would be handled by a backend
        if (username && password) {
            // Redirect based on department
            if (department === 'admin') {
                window.location.href = 'admin-dashboard.html';
            } else {
                window.location.href = `${department}-dashboard.html`;
            }
        } else {
            alert('Please enter valid credentials');
        }
    });
    
    // Forgot password functionality
    document.getElementById('forgotPassword').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Please contact your system administrator to reset your password.');
    });
});