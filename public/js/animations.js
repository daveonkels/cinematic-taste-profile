/**
 * Cinematic Taste Profile - Animations
 * Scroll-triggered animations and visual effects
 */

const Animations = {
    // Store observers for cleanup
    observers: [],

    /**
     * Initialize all animations
     */
    init() {
        this.setupScrollReveal();
        this.setupCounterAnimations();
        this.setupTypewriter();
        this.setupGenreBars();
        this.setupEraBars();
        this.setupStaggeredItems();
    },

    /**
     * Generic scroll reveal for sections
     */
    setupScrollReveal() {
        const sections = document.querySelectorAll('.section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-50px'
            }
        );

        sections.forEach(section => observer.observe(section));
        this.observers.push(observer);
    },

    /**
     * Animate counter numbers
     * Only targets elements with both data-count AND the counter class
     */
    setupCounterAnimations() {
        const counters = document.querySelectorAll('.hero__stat-number[data-count]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.dataset.animated) {
                        entry.target.dataset.animated = 'true';
                        this.animateCounter(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach(counter => observer.observe(counter));
        this.observers.push(observer);
    },

    /**
     * Animate a single counter element
     */
    animateCounter(element) {
        const target = parseInt(element.dataset.count, 10);
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out-expo)
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(eased * target);

            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        requestAnimationFrame(animate);
    },

    /**
     * Typewriter effect for hero tagline
     */
    setupTypewriter() {
        const typewriter = document.querySelector('.typewriter');
        if (!typewriter) return;

        const text = typewriter.textContent;
        typewriter.textContent = '';
        typewriter.style.opacity = '1';

        let index = 0;
        const speed = 30;

        const type = () => {
            if (index < text.length) {
                typewriter.textContent = text.slice(0, index + 1);
                index++;
                setTimeout(type, speed);
            }
        };

        // Start after a delay
        setTimeout(type, 2000);
    },

    /**
     * Animate genre bars on scroll
     */
    setupGenreBars() {
        const bars = document.querySelectorAll('.genre-bar');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('is-visible');
                            const fill = entry.target.querySelector('.genre-bar__fill');
                            const percent = entry.target.dataset.percent;
                            if (fill) {
                                fill.style.setProperty('--percent', `${percent}%`);
                            }
                        }, index * 100);
                    }
                });
            },
            { threshold: 0.2 }
        );

        bars.forEach(bar => observer.observe(bar));
        this.observers.push(observer);
    },

    /**
     * Animate era timeline bars
     */
    setupEraBars() {
        const bars = document.querySelectorAll('.era-bar');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('is-visible');
                        }, index * 150);
                    }
                });
            },
            { threshold: 0.2 }
        );

        bars.forEach(bar => observer.observe(bar));
        this.observers.push(observer);
    },

    /**
     * Staggered reveal for grid items
     */
    setupStaggeredItems() {
        const staggeredGroups = [
            '.pattern-card',
            '.director-node',
            '.theme-card',
            '.avoid-item',
            '.recommendation-item'
        ];

        staggeredGroups.forEach(selector => {
            this.observeStaggeredGroup(selector);
        });
    },

    /**
     * Observe a group of elements for staggered reveal
     */
    observeStaggeredGroup(selector) {
        const items = document.querySelectorAll(selector);
        if (!items.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter(e => e.isIntersecting);
                visibleEntries.forEach((entry, index) => {
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, index * 100);
                });
            },
            { threshold: 0.1 }
        );

        items.forEach(item => observer.observe(item));
        this.observers.push(observer);
    },

    /**
     * Create parallax scroll effect
     */
    setupParallax() {
        const orbs = document.querySelectorAll('.gradient-orb');
        let ticking = false;

        const updateParallax = () => {
            const scrollY = window.scrollY;

            orbs.forEach((orb, index) => {
                const speed = 0.1 + (index * 0.05);
                const yOffset = scrollY * speed;
                orb.style.transform = `translateY(${yOffset}px)`;
            });

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });
    },

    /**
     * Cleanup observers
     */
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Animations.init();
});
