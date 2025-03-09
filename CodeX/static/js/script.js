// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Initialize Feather Icons
    feather.replace();

    // Features Section Animation & Testimonials
    let autoRotateInterval;
    const testimonials = [
        {
            quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Sarah Chen",
            designation: "Product Manager at TechFlow",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Michael Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "Emily Watson",
            designation: "Operations Director at CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    let activeIndex = 0;
    const imageContainer = document.getElementById('imageContainer');
    const textContent = document.getElementById('textContent');

    function createImageElements() {
        testimonials.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.className = `testimonial-card ${index === activeIndex ? 'active' : ''}`;
            card.innerHTML = `
                <img src="${testimonial.src}" alt="${testimonial.name}" class="testimonial-image">
            `;
            imageContainer.appendChild(card);
        });
    }

    function updateContent() {
        const currentTestimonial = testimonials[activeIndex];
        textContent.innerHTML = `
            <h3>${currentTestimonial.name}</h3>
            <p>${currentTestimonial.designation}</p>
            <div class="quote-container">
                ${currentTestimonial.quote.split(' ').map((word, i) => `
                    <span style="animation-delay: ${i * 0.02}s" class="text-enter-active">${word}&nbsp;</span>
                `).join('')}
            </div>
        `;
        
        document.querySelectorAll('.testimonial-card').forEach((card, index) => {
            card.classList.toggle('active', index === activeIndex);
            card.style.transform = `rotate(${index === activeIndex ? 0 : Math.random() * 20 - 10}deg)`;
            card.style.zIndex = index === activeIndex ? 999 : testimonials.length - index;
            card.style.opacity = index === activeIndex ? 1 : 0.7;
        });
    }

    // Make these functions globally accessible
    window.handleNext = function() {
        activeIndex = (activeIndex + 1) % testimonials.length;
        updateContent();
        clearAutoRotate();
    };

    window.handlePrev = function() {
        activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
        updateContent();
        clearAutoRotate();
    };

    function clearAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
            autoRotateInterval = null;
        }
    }

    // Initialize
    createImageElements();
    updateContent();
    autoRotateInterval = setInterval(window.handleNext, 5000);

    // Testimonials Data
    const testimonial = [
        {
            name: 'Sarah Johnson',
            role: 'Senior Developer',
            company: 'Tech Corp',
            image: '/api/placeholder/100/100',
            text: 'CodeX has revolutionized our team\'s coding workflow. The collaborative features are outstanding.'
        },
        {
            name: 'Michael Chen',
            role: 'Full Stack Developer',
            company: 'StartupX',
            image: '/api/placeholder/100/100',
            text: 'The best code editor I\'ve used. Clean interface and powerful features make coding a joy.'
        },
        {
            name: 'Emily Williams',
            role: 'Lead Engineer',
            company: 'DevCo',
            image: '/api/placeholder/100/100',
            text: 'Perfect for our remote team. Real-time collaboration and version control integration is seamless.'
        }
    ];

    // Footer Links Data
    const footerSections = [
        {
            title: 'Product',
            links: ['Features', 'Documentation', 'Updates']
        },
        {
            title: 'Company',
            links: ['About', 'Blog', 'Careers']
        },
        {
            title: 'Resources',
            links: ['Community', 'Help Center', 'API', 'Status']
        }
    ];

    // Populate Testimonials
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (testimonialsGrid) {
        testimonials.forEach((testimonial, index) => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg';
            testimonialCard.setAttribute('data-aos', 'fade-up');
            testimonialCard.setAttribute('data-aos-delay', (index * 100).toString());
            testimonialCard.innerHTML = `
                <div class="flex items-center mb-4">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                    <div>
                        <h4 class="font-semibold text-slate-900 dark:text-white">${testimonial.name}</h4>
                        <p class="text-sm text-slate-600 dark:text-slate-300">${testimonial.role} at ${testimonial.company}</p>
                    </div>
                </div>
                <p class="text-slate-600 dark:text-slate-300">"${testimonial.text}"</p>
            `;
            testimonialsGrid.appendChild(testimonialCard);
        });
    }

    // Populate Footer Links
    const footerLinksContainer = document.getElementById('footer-links');
    if (footerLinksContainer) {
        footerSections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.innerHTML = `
                <h3 class="text-white font-semibold mb-4">${section.title}</h3>
                <ul class="space-y-2">
                    ${section.links.map(link => `
                        <li>
                            <a href="#" class="footer-link text-slate-400 hover:text-white">
                                ${link}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            `;
            footerLinksContainer.appendChild(sectionDiv);
        });
    }

    // Scroll to Top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                navbar.style.top = "0";
                navbar.classList.add('shadow-lg');
            } else {
                navbar.style.top = "20px";
                navbar.classList.remove('shadow-lg');
            }
        });
    }

    // Re-initialize Feather Icons after dynamic content
    feather.replace();
});
