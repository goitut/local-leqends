document.addEventListener('DOMContentLoaded', function() {
            updateAuthButton();
            
            // FAQ accordion functionality
            const faqButtons = document.querySelectorAll('.border-b button');
            faqButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const content = button.nextElementSibling;
                    content.classList.toggle('hidden');
                    
                    const icon = button.querySelector('i');
                    if (content.classList.contains('hidden')) {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    } else {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    }
                });
            });
            
            // Contact form submission
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    contactForm.classList.add('hidden');
                    document.getElementById('form-success').classList.remove('hidden');
                });
            }
        });