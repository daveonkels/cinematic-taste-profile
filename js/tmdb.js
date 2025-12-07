/**
 * Cinematic Taste Profile - Local Poster Loader
 * Uses locally cached movie posters for fast loading
 */

const TMDB = {
    LOCAL_POSTER_PATH: 'images/posters/',

    /**
     * Get local poster URL from posterPath
     */
    getLocalPosterUrl(posterPath) {
        if (!posterPath) return null;
        // posterPath is like "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        const filename = posterPath.replace(/^\//, '');
        return `${this.LOCAL_POSTER_PATH}${filename}`;
    },

    /**
     * Load posters for the highest rated films section
     */
    loadRatedFilmsPosters() {
        const container = document.getElementById('rated-films');
        if (!container) return;

        const films = PROFILE_DATA.highestRated;

        for (const film of films) {
            const filmEl = document.createElement('div');
            filmEl.className = 'rated-film';
            filmEl.dataset.title = film.title;

            // Create placeholder immediately
            filmEl.innerHTML = `
                <div class="rated-film__overlay">
                    <div class="rated-film__title">${film.title}</div>
                    <div class="rated-film__meta">
                        <span class="rated-film__year">${film.year}</span>
                        <span class="rated-film__rating">${film.rating || ''}</span>
                    </div>
                </div>
            `;

            container.appendChild(filmEl);

            // Use local poster if available
            if (film.posterPath) {
                const posterUrl = this.getLocalPosterUrl(film.posterPath);
                const img = document.createElement('img');
                img.className = 'rated-film__poster';
                img.alt = film.title;
                img.loading = 'lazy';

                filmEl.insertBefore(img, filmEl.firstChild);
                img.src = posterUrl;

                img.onerror = () => {
                    img.remove();
                    filmEl.classList.add('rated-film--placeholder');
                };
            } else {
                filmEl.classList.add('rated-film--placeholder');
            }
        }

        // Register dynamically created elements with animations
        if (typeof Animations !== 'undefined' && Animations.observeStaggeredGroup) {
            Animations.observeStaggeredGroup('.rated-film');
        }
    },

    /**
     * Load featured poster for time-loop section
     */
    loadTimeLoopPoster() {
        const container = document.getElementById('timeloop-films');
        if (!container) return;

        // Just load Palm Springs as the featured poster
        const palmSprings = PROFILE_DATA.timeLoopFilms[0];

        if (palmSprings && palmSprings.posterPath) {
            const posterUrl = this.getLocalPosterUrl(palmSprings.posterPath);
            const img = document.createElement('img');
            img.src = posterUrl;
            img.alt = palmSprings.title;
            img.className = 'pattern-card__poster';
            img.style.cssText = `
                width: 60px;
                height: 90px;
                object-fit: cover;
                border-radius: 4px;
                border: 1px solid rgba(0, 240, 255, 0.3);
                box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
            `;
            container.appendChild(img);
        }
    },

    /**
     * Initialize poster loading
     */
    init() {
        // Load posters immediately since they're local
        this.loadRatedFilmsPosters();
        this.loadTimeLoopPoster();
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    TMDB.init();
});
