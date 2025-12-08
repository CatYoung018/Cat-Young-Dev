// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Handle both #id and just # (for back to top)
            if (targetId === '#' || targetId === '') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            const target = document.querySelector(targetId);
            if (target) {
                // Scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Focus the target if it's focusable
                // This helps keyboard users know where they've navigated to
                if (target.hasAttribute('tabindex') || target.tagName === 'A' || target.tagName === 'BUTTON') {
                    target.focus();
                } else {
                    // Make temporarily focusable
                    target.setAttribute('tabindex', '-1');
                    target.focus();
                    target.style.outline = 'none';
                }
            }
        });
    });
});