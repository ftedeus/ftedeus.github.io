document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = 60; // Height of your fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            if (menuToggle.getAttribute('aria-expanded') === 'true') {
                toggleMobileMenu();
            }
        });
    });

    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryNavigation = document.getElementById('primary-navigation');

    if (menuToggle && primaryNavigation) {
        menuToggle.addEventListener('click', toggleMobileMenu);

        function toggleMobileMenu() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            primaryNavigation.setAttribute('data-visible', !isExpanded); // Custom attribute for CSS
        }

        // Close menu if clicking outside when open
        document.addEventListener('click', (event) => {
            const isClickInsideNav = primaryNavigation.contains(event.target) || menuToggle.contains(event.target);
            if (!isClickInsideNav && menuToggle.getAttribute('aria-expanded') === 'true') {
                toggleMobileMenu();
            }
        });

        // Close menu on resize if it's a desktop width
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024 && menuToggle.getAttribute('aria-expanded') === 'true') {
                toggleMobileMenu();
            }
        });
    }

    // Optional: Add a "scroll to top" button functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = 'Top';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Simple form submission feedback (for demonstration, a real backend is needed)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // In a real application, you would send this data to a server
            alert('Thank you for your message, Francis! I will get back to you shortly.');
            this.reset(); // Clear the form
        });
    }

    // Project card hover effect (example, can be done with CSS too)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add a class for more complex animations if needed
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
    });
});