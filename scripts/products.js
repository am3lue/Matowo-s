// Products page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.product-button');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            
            // For now, just show an alert since we're focusing on front-end
            alert(`Added to cart: ${productName} - ${productPrice}`);
            
            // In the future, this would connect to a back-end
            console.log('Product added to cart:', {
                name: productName,
                price: productPrice.replace('$', '').replace(' per bag', '')
            });
        });
    });
});