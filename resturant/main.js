// TADKA Luxe - Main JavaScript
// Premium animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and interactions
    initSpiceParticles();
    initTypewriter();
    initScrollAnimations();
    initCarousel();
    initAIRecommendation();
    initSmoothScrolling();
    
    console.log('🌟 TADKA Luxe initialized with premium animations');
});

// Enhanced Spice Particle System
function initSpiceParticles() {
    const particleContainer = document.getElementById('spice-particles');
    if (!particleContainer) return;
    
    const spiceTypes = ['spice-cardamom', 'spice-saffron', 'spice-clove'];
    const particleCount = 40;
    const particles = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const spiceType = spiceTypes[Math.floor(Math.random() * spiceTypes.length)];
        particle.className = `spice-particle ${spiceType}`;
        particleContainer.appendChild(particle);
        
        // Random initial position
        gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.6 + 0.4,
            opacity: Math.random() * 0.6 + 0.4
        });
        
        particles.push(particle);
    }
    
    // Animate particles with sophisticated floating motion
    particles.forEach((particle, index) => {
        const duration = Math.random() * 25 + 20;
        const delay = Math.random() * 8;
        
        // Main floating animation
        gsap.to(particle, {
            x: "+=200",
            y: "+=100",
            rotation: 360,
            repeat: -1,
            yoyo: true,
            duration: duration,
            delay: delay,
            ease: "sine.inOut"
        });
        
        // Parallax layer effect
        const parallaxSpeed = Math.random() * 0.5 + 0.2;
        gsap.to(particle, {
            y: "+=50",
            repeat: -1,
            yoyo: true,
            duration: duration * 0.5,
            delay: delay,
            ease: "power1.inOut"
        });
        
        // Mouse interaction with enhanced effects
        document.addEventListener('mousemove', (e) => {
            const rect = particle.getBoundingClientRect();
            const distance = Math.sqrt(
                Math.pow(e.clientX - rect.left, 2) + Math.pow(e.clientY - rect.top, 2)
            );
            
            if (distance < 150) {
                const intensity = 1 - (distance / 150);
                gsap.to(particle, {
                    scale: 1.2 + intensity * 0.8,
                    opacity: 0.8 + intensity * 0.2,
                    duration: 0.4,
                    ease: "power2.out"
                });
            } else {
                gsap.to(particle, {
                    scale: Math.random() * 0.6 + 0.4,
                    opacity: Math.random() * 0.6 + 0.4,
                    duration: 0.8,
                    ease: "power2.inOut"
                });
            }
        });
    });
}

// Enhanced Typewriter Effect
function initTypewriter() {
    const typedElement = document.getElementById('typed-text');
    if (!typedElement) return;
    
    const messages = [
        "Where Tradition Meets Innovation",
        "AI-Powered Culinary Excellence",
        "Royal Flavors, Modern Luxury",
        "Your Gateway to Authentic India",
        "Premium Dining, Perfected"
    ];
    
    new Typed('#typed-text', {
        strings: messages,
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2500,
        loop: true,
        showCursor: true,
        cursorChar: '✨',
        autoInsertCss: false
    });
}

// Scroll Animations
function initScrollAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Reveal animations for sections
    const revealElements = document.querySelectorAll('.reveal-up');
    
    revealElements.forEach((element, index) => {
        gsap.fromTo(element, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: element,
                start: 'top 95%',
                end: 'bottom 5%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Text splitting animation
    Splitting();
    
    const splitText = document.querySelector('[data-splitting]');
    if (splitText) {
        const chars = splitText.querySelectorAll('.char');
        
        gsap.fromTo(chars, {
            opacity: 0,
            y: 100,
            rotateZ: 180
        }, {
            opacity: 1,
            y: 0,
            rotateZ: 0,
            duration: 1,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: splitText,
                start: 'top 80%'
            }
        });
    }
}

// Restaurant Carousel
function initCarousel() {
    const carousel = document.getElementById('restaurant-carousel');
    if (!carousel) return;
    
    new Splide('#restaurant-carousel', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '2rem',
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            640: {
                perPage: 1,
            }
        }
    }).mount();
}

// AI Recommendation System
function initAIRecommendation() {
    const aiButton = document.getElementById('ai-recommend-btn');
    const aiModal = document.getElementById('ai-modal');
    const closeModal = document.getElementById('close-ai-modal');
    const getRecommendation = document.getElementById('get-recommendation');
    const aiResult = document.getElementById('ai-result');
    
    if (!aiButton || !aiModal) return;
    
    // Dish database for AI recommendations
    const dishDatabase = {
        'celebratory': {
            1: { name: 'Butter Chicken', description: 'Rich, creamy tomato-based curry perfect for special occasions' },
            2: { name: 'Chicken Biryani', description: 'Aromatic basmati rice with tender chicken and saffron' },
            3: { name: 'Paneer Tikka', description: 'Grilled cottage cheese with aromatic spices' },
            4: { name: 'Rogan Josh', description: 'Kashmiri lamb curry with bold flavors' },
            5: { name: 'Chicken 65', description: 'Spicy South Indian appetizer with intense heat' }
        },
        'comfort': {
            1: { name: 'Dal Makhani', description: 'Creamy black lentils slow-cooked to perfection' },
            2: { name: 'Palak Paneer', description: 'Soft paneer in creamy spinach curry' },
            3: { name: 'Aloo Gobi', description: 'Classic potato and cauliflower comfort dish' },
            4: { name: 'Chana Masala', description: 'Spicy chickpea curry with aromatic spices' },
            5: { name: 'Masala Dosa', description: 'Crispy rice crepe with spicy potato filling' }
        },
        'adventurous': {
            1: { name: 'Fish Amritsari', description: 'Punjabi-style fried fish with bold spices' },
            2: { name: 'Laal Maas', description: 'Fiery Rajasthani mutton curry' },
            3: { name: 'Andhra Chicken', description: 'Spicy South Indian chicken curry' },
            4: { name: 'Naga Ghost Pepper Curry', description: 'Extremely hot curry with Naga chilies' },
            5: { name: 'Phall Curry', description: 'One of the hottest Indian curries available' }
        },
        'romantic': {
            1: { name: 'Shahi Paneer', description: 'Royal paneer dish with rich, creamy sauce' },
            2: { name: 'Kashmiri Pulao', description: 'Sweet and savory rice with dry fruits' },
            3: { name: 'Malai Kofta', description: 'Soft vegetable dumplings in creamy gravy' },
            4: { name: 'Rose Kulfi', description: 'Traditional Indian ice cream with rose flavor' },
            5: { name: 'Saffron Kheer', description: 'Rich rice pudding with saffron and nuts' }
        }
    };
    
    let selectedMood = null;
    let spiceLevel = 3;
    
    // Open modal
    aiButton.addEventListener('click', () => {
        aiModal.classList.remove('hidden');
        aiModal.classList.add('flex');
        
        setTimeout(() => {
            const modalContent = aiModal.querySelector('.glass-card');
            gsap.to(modalContent, {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        }, 10);
    });
    
    // Close modal
    const closeModalFunction = () => {
        const modalContent = aiModal.querySelector('.glass-card');
        gsap.to(modalContent, {
            scale: 0.95,
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                aiModal.classList.add('hidden');
                aiModal.classList.remove('flex');
                resetModal();
            }
        });
    };
    
    closeModal?.addEventListener('click', closeModalFunction);
    
    // Close modal on backdrop click
    aiModal.addEventListener('click', (e) => {
        if (e.target === aiModal) {
            closeModalFunction();
        }
    });
    
    // Mood selection
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active state from all buttons
            document.querySelectorAll('.mood-btn').forEach(b => {
                b.classList.remove('bg-gold-primary/30', 'border-gold-primary');
                b.classList.add('bg-royal-maroon/50', 'border-gold-primary/30');
            });
            
            // Add active state to clicked button
            btn.classList.remove('bg-royal-maroon/50', 'border-gold-primary/30');
            btn.classList.add('bg-gold-primary/30', 'border-gold-primary');
            
            selectedMood = btn.dataset.mood;
        });
    });
    
    // Spice level
    const spiceSlider = document.getElementById('spice-level');
    spiceSlider?.addEventListener('input', (e) => {
        spiceLevel = parseInt(e.target.value);
    });
    
    // Get recommendation
    getRecommendation?.addEventListener('click', () => {
        if (!selectedMood) {
            alert('Please select your mood first!');
            return;
        }
        
        const dishes = dishDatabase[selectedMood];
        const recommendedDish = dishes[spiceLevel];
        
        // Show loading animation
        getRecommendation.textContent = 'Finding your perfect dish...';
        getRecommendation.disabled = true;
        
        setTimeout(() => {
            // Display result
            document.getElementById('recommended-dish').textContent = recommendedDish.name;
            document.getElementById('dish-description').textContent = recommendedDish.description;
            
            // Show result with animation
            aiResult.classList.remove('hidden');
            gsap.fromTo(aiResult, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
            
            // Reset button
            getRecommendation.textContent = 'Get Recommendation';
            getRecommendation.disabled = false;
            
            // Add confetti effect
            createConfetti();
        }, 1500);
    });
    
    function resetModal() {
        selectedMood = null;
        spiceLevel = 3;
        aiResult.classList.add('hidden');
        
        // Reset mood buttons
        document.querySelectorAll('.mood-btn').forEach(btn => {
            btn.classList.remove('bg-gold-primary/30', 'border-gold-primary');
            btn.classList.add('bg-royal-maroon/50', 'border-gold-primary/30');
        });
        
        // Reset spice level
        if (spiceSlider) spiceSlider.value = 3;
        
        // Reset button text
        if (getRecommendation) {
            getRecommendation.textContent = 'Get Recommendation';
            getRecommendation.disabled = false;
        }
    }
    
    // Confetti effect
    function createConfetti() {
        const colors = ['#FFD700', '#F6C90E', '#FFF8E7', '#3B0A45'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: -10px;
                left: ${Math.random() * 100}%;
                z-index: 1000;
                pointer-events: none;
            `;
            
            document.body.appendChild(confetti);
            
            gsap.to(confetti, {
                y: window.innerHeight + 100,
                x: (Math.random() - 0.5) * 200,
                rotation: Math.random() * 360,
                duration: Math.random() * 3 + 2,
                ease: "power1.out",
                onComplete: () => confetti.remove()
            });
        }
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // Navbar background on scroll
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(59, 10, 69, 0.95)';
            } else {
                navbar.style.background = 'rgba(59, 10, 69, 0.9)';
            }
        });
    }
}

// Utility Functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-6 z-50 px-6 py-3 rounded-lg font-semibold transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add click handlers for demo buttons
document.addEventListener('click', (e) => {
    if (e.target.matches('button') && !e.target.id && !e.target.classList.contains('mood-btn')) {
        if (e.target.textContent.includes('Order Now')) {
            showNotification('Redirecting to order page...');
            setTimeout(() => {
                window.location.href = 'menu.html';
            }, 1000);
        } else if (e.target.textContent.includes('Sign In')) {
            showNotification('Sign in feature coming soon!');
        }
    }
});

// Add hover effects for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.dish-card, .glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});

// Performance optimization
function optimizeAnimations() {
    // Reduce animations on mobile for better performance
    if (window.innerWidth < 768) {
        const particles = document.querySelectorAll('.spice-particle');
        particles.forEach(particle => {
            particle.style.display = 'none';
        });
    }
}

window.addEventListener('resize', optimizeAnimations);
optimizeAnimations(); // Call on load