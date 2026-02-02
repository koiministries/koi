// Product filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get category to filter
            const category = btn.getAttribute('data-category');
            
            // Filter products
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    
                    // Animate in
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Add to cart functionality (placeholder)
const productBtns = document.querySelectorAll('.product-btn');

productBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        // Change button text temporarily
        const originalText = btn.textContent;
        btn.textContent = 'Added!';
        btn.style.background = '#4a7c59';
        
        // Log to console (in production, this would add to cart)
        console.log(`Added to cart: ${productName} - ${productPrice}`);
        
        // Reset button after 2 seconds
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    });
});
