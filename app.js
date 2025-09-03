/* ============================================
   ZAYD MUSA PERSONAL WEBSITE - JAVASCRIPT
   Interactive features and animations
   ============================================ */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all interactive features
    initScrollAnimations();
    initProjectCardInteractions();
    initSocialLinkInteractions();
    initTypingAnimation();
    initSmoothScrolling();
    
    console.log('Zayd Musa website loaded successfully! 🚀');
});

/* ============================================
   SCROLL-TRIGGERED ANIMATIONS
   Fade in sections as they come into view
   ============================================ */

function initScrollAnimations() {
    // Create intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,           // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px'  // Start animation 50px before element enters viewport
    };
    
    // Observer callback function
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element comes into view
                entry.target.classList.add('animate-fade-in');
                
                // Stop observing this element (animation only happens once)
                observer.unobserve(entry.target);
            }
        });
    };
    
    // Create the observer
    const scrollObserver = new IntersectionObserver(animateOnScroll, observerOptions);
    
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.about-section, .social-section, .projects-section, .project-card');
    
    // Start observing each element
    animatedElements.forEach(element => {
        element.classList.add('fade-element'); // Add initial hidden state
        scrollObserver.observe(element);
    });
    
    // Add CSS styles for fade animation (done via JavaScript to keep CSS clean)
    addFadeAnimationStyles();
}

function addFadeAnimationStyles() {
    // Create and inject CSS for fade animations
    const style = document.createElement('style');
    style.textContent = `
        .fade-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Stagger animation for project cards */
        .project-card.fade-element {
            transition-delay: calc(var(--animation-delay, 0) * 100ms);
        }
    `;
    document.head.appendChild(style);
    
    // Add staggered delays to project cards for a wave effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.setProperty('--animation-delay', index);
    });
}

/* ============================================
   PROJECT CARD INTERACTIONS
   Enhanced hover effects and click handling
   ============================================ */

function initProjectCardInteractions() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click tracking for analytics (you can integrate with Google Analytics later)
        const projectLink = card.querySelector('.project-link');
        if (projectLink) {
            projectLink.addEventListener('click', function(e) {
                const projectTitle = card.querySelector('.project-title').textContent;
                console.log(`Project clicked: ${projectTitle}`);
                
                // You can add analytics tracking here
                // gtag('event', 'project_click', { project_name: projectTitle });
            });
        }
        
        // Add keyboard navigation support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('.project-link');
                if (link) link.click();
            }
        });
    });
}

/* ============================================
   SOCIAL LINK INTERACTIONS
   Enhanced hover effects and click tracking
   ============================================ */

function initSocialLinkInteractions() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        // Add enhanced hover effect
        link.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Track social media clicks
        link.addEventListener('click', function() {
            const platform = this.querySelector('span').textContent;
            console.log(`Social link clicked: ${platform}`);
            
            // You can add analytics tracking here
            // gtag('event', 'social_click', { platform: platform });
        });
    });
}

/* ============================================
   TYPING ANIMATION
   Animated typing effect for the title
   ============================================ */

function initTypingAnimation() {
    const titleElement = document.querySelector('.title');
    if (!titleElement) return;
    
    const originalText = titleElement.textContent;
    const typingSpeed = 50; // milliseconds between each character
    const startDelay = 1000; // delay before starting animation
    
    // Clear the text initially
    titleElement.textContent = '';
    titleElement.style.borderRight = '2px solid var(--accent-primary)'; // Add cursor
    
    // Start typing animation after delay
    setTimeout(() => {
        typeText(titleElement, originalText, 0, typingSpeed);
    }, startDelay);
}

function typeText(element, text, index, speed) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typeText(element, text, index + 1, speed), speed);
    } else {
        // Remove cursor after typing is complete
        setTimeout(() => {
            element.style.borderRight = 'none';
        }, 1000);
    }
}

/* ============================================
   SMOOTH SCROLLING
   Enhanced smooth scrolling for navigation
   ============================================ */

function initSmoothScrolling() {
    // Add smooth scrolling to any anchor links (if you add navigation later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll-to-top functionality (can be used with a button later)
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

/* ============================================
   PERFORMANCE UTILITIES
   Optimize animations and interactions
   ============================================ */

// Debounce function for scroll events (if needed later)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events (if needed later)
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   ACCESSIBILITY ENHANCEMENTS
   Keyboard navigation and screen reader support
   ============================================ */

// Add keyboard navigation for project cards
function enhanceKeyboardNavigation() {
    const focusableElements = document.querySelectorAll('.social-link, .project-link, .project-card');
    
    focusableElements.forEach(element => {
        // Add tabindex for keyboard navigation
        element.setAttribute('tabindex', '0');
        
        // Add visual focus indicator
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--accent-primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

/* ============================================
   UTILITY FUNCTIONS
   Helper functions for various features
   ============================================ */

// Function to update project images (can be called when adding images)
window.updateProjectImage = function(projectIndex, imageSrc, altText) {
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards[projectIndex]) {
        const placeholder = projectCards[projectIndex].querySelector('.project-image-placeholder');
        
        // Create and insert image element
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = altText || 'Project screenshot';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        
        // Replace placeholder content with image
        placeholder.innerHTML = '';
        placeholder.appendChild(img);
        
        console.log(`Updated project ${projectIndex} image`);
    }
};

// Function to add new project (for future expansion)
window.addProject = function(projectData) {
    const projectsGrid = document.querySelector('.projects-grid');
    const projectCard = createProjectCard(projectData);
    projectsGrid.appendChild(projectCard);
    
    console.log('New project added:', projectData.title);
};

function createProjectCard(data) {
    // This function can be used to dynamically create project cards
    // Implementation would mirror the HTML structure in index.html
    const card = document.createElement('div');
    card.className = 'project-card fade-element';
    
    // Add project card HTML structure here if needed for dynamic content
    // For now, keeping it simple since projects are static
    
    return card;
}

/* ============================================
   ERROR HANDLING AND DEBUGGING
   ============================================ */

// Global error handler for debugging
window.addEventListener('error', function(e) {
    console.error('JavaScript error on Zayd Musa website:', e.error);
});

// Console styling for development
if (console && console.log) {
    console.log(
        '%c🚀 Zayd Musa Personal Website',
        'color: #598556; font-size: 16px; font-weight: bold;'
    );
    console.log(
        '%cDesigned with modern web technologies and sustainable development practices in mind.',
        'color: #e0e0e0; font-size: 12px;'
    );
}

/* ============================================
   INITIALIZATION COMPLETE
   ============================================ */

// Export functions for potential external use
window.ZaydMusaWebsite = {
    updateProjectImage: window.updateProjectImage,
    addProject: window.addProject,
    scrollToTop: window.scrollToTop
};

console.log('✅ All interactive features initialized successfully!');