
    document.addEventListener('DOMContentLoaded', () => {
        // Select all navigation links
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                // Prevent the default browser jump
                event.preventDefault();

                // Get the target section's ID from the link's href
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                // If the target section exists, smoothly scroll to it
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });


