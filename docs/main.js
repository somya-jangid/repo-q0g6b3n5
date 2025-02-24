document.addEventListener('DOMContentLoaded', function(){
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamburger){
        hamburger.addEventListener('click', function(){
            navLinks.classList.toggle('active');
        });
    }

    // Form Focus Animation
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function(){
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function(){
            this.parentElement.classList.remove('focused');
        });
    });

    // Loading spinner simulation (for demonstration)
    const searchForm = document.querySelector('.search-form');
    if(searchForm){
        searchForm.addEventListener('submit', function(e){
            e.preventDefault();
            // Show loading indicator
            const btn = this.querySelector('.search-btn');
            btn.innerHTML = '<span class="spinner"></span> Searching...';
            setTimeout(() => {
                btn.innerHTML = '<i class="icon-search"></i> Search Trains';
            }, 2000);
        });
    }

    // Simple animation for passenger count update (if implemented)
    // Additional JS functionality can be added here
});
