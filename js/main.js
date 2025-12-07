/**
 * Cinematic Taste Profile - Main Entry Point
 * Initializes all components and handles global interactions
 */

const App = {
    /**
     * Initialize the application
     */
    init() {
        this.setupSmoothScroll();
        this.setupScrollIndicator();
        this.setupHeroAnimation();
        this.handleReducedMotion();
        this.setCurrentYear();

        // Log initialization
        console.log('🎬 Cinematic Taste Profile initialized');
        console.log(`📊 ${PROFILE_DATA.stats.totalFilms} films analyzed`);
    },

    /**
     * Set the current year in the footer
     */
    setCurrentYear() {
        const yearEl = document.getElementById('current-year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }
    },

    /**
     * Smooth scroll for anchor links
     */
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },

    /**
     * Scroll indicator click handler
     */
    setupScrollIndicator() {
        const indicator = document.querySelector('.scroll-indicator');
        if (!indicator) return;

        indicator.addEventListener('click', () => {
            const firstSection = document.querySelector('.section');
            if (firstSection) {
                firstSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });

        // Hide indicator on scroll
        let hidden = false;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100 && !hidden) {
                hidden = true;
                indicator.style.opacity = '0';
                indicator.style.pointerEvents = 'none';
            } else if (window.scrollY <= 100 && hidden) {
                hidden = false;
                indicator.style.opacity = '0.6';
                indicator.style.pointerEvents = 'auto';
            }
        }, { passive: true });
    },

    /**
     * Hero section entrance animation
     */
    setupHeroAnimation() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        // Add loaded class after a brief delay for entrance animation
        setTimeout(() => {
            hero.classList.add('is-loaded');
        }, 100);
    },

    /**
     * Handle prefers-reduced-motion
     */
    handleReducedMotion() {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const updateMotion = () => {
            if (mediaQuery.matches) {
                document.body.classList.add('reduced-motion');
            } else {
                document.body.classList.remove('reduced-motion');
            }
        };

        updateMotion();
        mediaQuery.addEventListener('change', updateMotion);
    },

    /**
     * Create floating particles effect
     */
    createParticles() {
        const container = document.createElement('div');
        container.className = 'particles';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
        `;

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 3 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = Math.random() * 20 + 20;
            const delay = Math.random() * -20;

            particle.style.cssText = `
                position: absolute;
                left: ${x}%;
                top: ${y}%;
                width: ${size}px;
                height: ${size}px;
                background: rgba(0, 240, 255, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
            `;

            container.appendChild(particle);
        }

        document.body.appendChild(container);

        // Add particle animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0%, 100% { transform: translate(0, 0); opacity: 0.3; }
                25% { transform: translate(20px, -30px); opacity: 0.6; }
                50% { transform: translate(-10px, -50px); opacity: 0.4; }
                75% { transform: translate(15px, -20px); opacity: 0.5; }
            }
        `;
        document.head.appendChild(style);
    },

    /**
     * Update genre bar fills with actual percentages
     */
    updateGenreBars() {
        document.querySelectorAll('.genre-bar').forEach(bar => {
            const percent = bar.dataset.percent;
            const fill = bar.querySelector('.genre-bar__fill');
            if (fill && percent) {
                fill.style.setProperty('--percent', `${percent}%`);
            }
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();

    // Create particles after a delay to not block initial render
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setTimeout(() => {
            App.createParticles();
        }, 1000);
    }

    // Update genre bars
    App.updateGenreBars();
});

// Handle visibility changes (pause animations when tab not visible)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.classList.add('is-hidden');
    } else {
        document.body.classList.remove('is-hidden');
    }
});
