/**
 * Cinematic Taste Profile - Charts & Visualizations
 * D3.js powered interactive visualizations
 */

const Charts = {
    tooltip: null,
    selectedGenre: null,

    /**
     * Initialize all charts
     */
    init() {
        this.initTooltip();
        this.createGenreChart();
        this.createDirectorFilmStrip();
        this.createRatingLens();
        this.setupInteractions();

        // Handle window resize with debounce
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.createGenreChart();
                this.createDirectorFilmStrip();
            }, 250);
        });

        // Close panel with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.selectedGenre) {
                this.closeFilmsPanel();
            }
        });

        // Close panel when clicking backdrop
        const backdrop = document.getElementById('genre-films-backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', () => {
                this.closeFilmsPanel();
            });
        }
    },

    initTooltip() {
        d3.select(".d3-tooltip").remove();
        this.tooltip = d3.select("body").append("div")
            .attr("class", "d3-tooltip")
            .style("opacity", 0);
    },

    /**
     * Genre Treemap - Movie Screens with click-to-reveal films
     */
    createGenreChart() {
        const container = document.getElementById('genre-chart');
        if (!container) return;
        container.innerHTML = '';

        const width = container.offsetWidth || 600;
        const height = container.offsetHeight || 500;
        const padding = 4;

        const svg = d3.select(container).append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`);

        const data = PROFILE_DATA.genres;

        // Create hierarchy
        const root = d3.hierarchy({ children: data })
            .sum(d => d.count)
            .sort((a, b) => b.value - a.value);

        // Create treemap layout
        const treemap = d3.treemap()
            .size([width, height])
            .padding(padding)
            .round(true);

        treemap(root);

        // Create cells
        const cells = svg.selectAll(".treemap-cell")
            .data(root.leaves())
            .join("g")
            .attr("class", "treemap-cell")
            .attr("transform", d => `translate(${d.x0}, ${d.y0})`)
            .style("cursor", "pointer");

        // Screen background (dark bezel)
        cells.append("rect")
            .attr("class", "screen-bezel")
            .attr("width", d => d.x1 - d.x0)
            .attr("height", d => d.y1 - d.y0)
            .attr("fill", "#1a1a1a")
            .attr("rx", 3);

        // Screen content (colored)
        cells.append("rect")
            .attr("class", "screen-content")
            .attr("x", 3)
            .attr("y", 3)
            .attr("width", d => Math.max(0, d.x1 - d.x0 - 6))
            .attr("height", d => Math.max(0, d.y1 - d.y0 - 6))
            .attr("fill", d => d.data.color)
            .attr("rx", 2)
            .style("opacity", 0.85)
            .on("mouseenter", (event, d) => {
                if (this.selectedGenre !== d.data.name) {
                    d3.select(event.currentTarget)
                        .transition().duration(150)
                        .style("opacity", 1)
                        .attr("filter", "drop-shadow(0 0 8px rgba(255,255,255,0.3))");
                }

                // Show tooltip
                this.tooltip.transition().duration(150).style("opacity", 1);
                this.tooltip.html(`<strong>${d.data.name}</strong><br/>${d.data.count} films (${d.data.percent}%)`)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 10) + "px");
            })
            .on("mouseleave", (event, d) => {
                if (this.selectedGenre !== d.data.name) {
                    d3.select(event.currentTarget)
                        .transition().duration(225)
                        .style("opacity", 0.85)
                        .attr("filter", "none");
                }

                this.tooltip.transition().duration(225).style("opacity", 0);
            })
            .on("click", (event, d) => {
                event.stopPropagation();
                this.handleGenreClick(d.data, event.currentTarget);
            });

        // Screen reflection (gradient overlay)
        cells.append("rect")
            .attr("class", "screen-reflection")
            .attr("x", 3)
            .attr("y", 3)
            .attr("width", d => Math.max(0, d.x1 - d.x0 - 6))
            .attr("height", d => Math.max(0, (d.y1 - d.y0 - 6) * 0.3))
            .attr("fill", "url(#screenGradient)")
            .attr("rx", 2)
            .style("pointer-events", "none");

        // Add gradient definition
        const defs = svg.append("defs");
        const gradient = defs.append("linearGradient")
            .attr("id", "screenGradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "0%")
            .attr("y2", "100%");
        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "white")
            .attr("stop-opacity", 0.15);
        gradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "white")
            .attr("stop-opacity", 0);

        // Genre labels (title cards)
        cells.append("text")
            .attr("class", "screen-title")
            .attr("x", d => (d.x1 - d.x0) / 2)
            .attr("y", d => (d.y1 - d.y0) / 2)
            .attr("dy", "-0.5em")
            .attr("text-anchor", "middle")
            .text(d => (d.x1 - d.x0) > 60 && (d.y1 - d.y0) > 40 ? d.data.name : "")
            .style("font-family", "var(--font-display)")
            .style("font-size", d => (d.x1 - d.x0) > 120 ? "14px" : "11px")
            .style("font-weight", "500")
            .style("font-style", "italic")
            .style("fill", "rgba(0, 0, 0, 0.6)")
            .style("pointer-events", "none");

        // Percentage labels
        cells.append("text")
            .attr("class", "screen-percent")
            .attr("x", d => (d.x1 - d.x0) / 2)
            .attr("y", d => (d.y1 - d.y0) / 2)
            .attr("dy", "1em")
            .attr("text-anchor", "middle")
            .text(d => (d.x1 - d.x0) > 50 && (d.y1 - d.y0) > 40 ? d.data.percent + "%" : "")
            .style("font-family", "var(--font-mono)")
            .style("font-size", "10px")
            .style("fill", "rgba(0, 0, 0, 0.4)")
            .style("pointer-events", "none");
    },

    /**
     * Handle genre cell click - show/hide films panel
     */
    handleGenreClick(genre, element) {
        // Toggle if same genre clicked
        if (this.selectedGenre === genre.name) {
            this.closeFilmsPanel();
            return;
        }

        // Update selection state
        this.selectedGenre = genre.name;

        // Update cell visual states
        d3.selectAll(".screen-content")
            .transition().duration(150)
            .style("opacity", function() {
                const cell = d3.select(this.parentNode).datum();
                return cell.data.name === genre.name ? 1 : 0.5;
            })
            .attr("filter", function() {
                const cell = d3.select(this.parentNode).datum();
                return cell.data.name === genre.name ? "drop-shadow(0 0 12px rgba(255,255,255,0.5))" : "none";
            });

        // Get films for this genre
        const films = this.getFilmsForGenre(genre.name);

        // Show panel
        this.showFilmsPanel(genre, films);
    },

    /**
     * Get top-rated films for a genre from genreTopFilms data
     */
    getFilmsForGenre(genreName) {
        // Use dedicated genre top films if available
        if (PROFILE_DATA.genreTopFilms && PROFILE_DATA.genreTopFilms[genreName]) {
            return PROFILE_DATA.genreTopFilms[genreName];
        }
        // Fallback to filtering highestRated
        return PROFILE_DATA.highestRated
            .filter(film => film.genres && film.genres.includes(genreName))
            .slice(0, 5);
    },

    /**
     * Show the films side panel
     */
    showFilmsPanel(genre, films) {
        const panel = document.getElementById('genre-films-panel');
        const backdrop = document.getElementById('genre-films-backdrop');
        if (!panel) return;

        // Build panel content with poster images
        const filmsHTML = films.length > 0
            ? films.map(film => {
                const posterUrl = film.posterPath
                    ? `https://image.tmdb.org/t/p/w185${film.posterPath}`
                    : null;
                const posterHTML = posterUrl
                    ? `<img src="${posterUrl}" alt="${film.title}" loading="lazy" onload="this.classList.add('loaded')">`
                    : `<div class="genre-film-poster-placeholder" style="background: ${genre.color}20; border: 1px solid ${genre.color}40;"></div>`;

                return `
                    <div class="genre-film-item">
                        <div class="genre-film-poster">
                            ${posterHTML}
                        </div>
                        <div class="genre-film-info">
                            <span class="genre-film-title">${film.title}</span>
                            <span class="genre-film-meta">
                                <span class="genre-film-year">${film.year}</span>
                                <span class="genre-film-rating">★ ${film.rating}</span>
                            </span>
                            ${film.genres ? `<span class="genre-film-genres">${film.genres}</span>` : ''}
                        </div>
                    </div>
                `;
            }).join('')
            : '<div class="genre-film-item genre-film-empty">No rated films in this genre</div>';

        panel.innerHTML = `
            <div class="genre-films-header">
                <div class="genre-films-title">
                    <span class="genre-films-name" style="color: ${genre.color}">${genre.name}</span>
                    <button class="genre-films-close" aria-label="Close panel">×</button>
                </div>
                <span class="genre-films-stats">${genre.count} films · ${genre.percent}%</span>
            </div>
            <div class="genre-films-list">
                <span class="genre-films-label">Top Rated</span>
                ${filmsHTML}
            </div>
        `;

        // Add close button handler
        panel.querySelector('.genre-films-close').addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeFilmsPanel();
        });

        // Show panel and backdrop
        panel.classList.add('is-open');
        panel.setAttribute('aria-hidden', 'false');
        if (backdrop) backdrop.classList.add('is-visible');
    },

    /**
     * Close the films side panel
     */
    closeFilmsPanel() {
        const panel = document.getElementById('genre-films-panel');
        const backdrop = document.getElementById('genre-films-backdrop');

        if (panel) {
            panel.classList.remove('is-open');
            panel.setAttribute('aria-hidden', 'true');
        }
        if (backdrop) {
            backdrop.classList.remove('is-visible');
        }

        this.selectedGenre = null;

        // Reset cell visual states
        d3.selectAll(".screen-content")
            .transition().duration(225)
            .style("opacity", 0.85)
            .attr("filter", "none");
    },

    /**
     * Create Director "Film Strip" Visualization
     */
    createDirectorFilmStrip() {
        const container = document.getElementById('director-constellation');
        if (!container) return;
        container.innerHTML = '';

        const width = container.offsetWidth || 350;
        const height = container.offsetHeight || 350;
        const centerX = width / 2;
        const centerY = height / 2;

        const svg = d3.select(container).append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`);

        const directors = PROFILE_DATA.directors;
        const maxFilms = Math.max(...directors.map(d => d.films));

        const angleStep = (Math.PI * 2) / directors.length;
        const innerRadius = 60;
        const outerRadius = Math.min(width, height) / 2 - 40;

        // Central hub
        const hub = svg.append("g")
            .attr("transform", `translate(${centerX}, ${centerY})`);

        [50, 40, 25].forEach((r, i) => {
            hub.append("circle")
                .attr("r", r)
                .attr("fill", i === 2 ? "var(--color-text-primary)" : "none")
                .attr("stroke", i === 2 ? "none" : "var(--color-text-muted)")
                .attr("stroke-width", i === 0 ? 2 : 1)
                .style("opacity", i === 2 ? 1 : 0.2);
        });

        hub.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", "0.35em")
            .text("★")
            .style("font-size", "24px")
            .style("fill", "var(--color-bg-card)");

        // Spoke lines
        directors.forEach((d, i) => {
            const angle = angleStep * i - Math.PI / 2;
            svg.append("line")
                .attr("x1", centerX)
                .attr("y1", centerY)
                .attr("x2", centerX + Math.cos(angle) * outerRadius)
                .attr("y2", centerY + Math.sin(angle) * outerRadius)
                .attr("stroke", "var(--color-text-muted)")
                .attr("stroke-width", 1)
                .attr("stroke-dasharray", "4 4")
                .style("opacity", 0.15);
        });

        // Director nodes
        const nodes = svg.append("g");

        directors.forEach((director, i) => {
            const angle = angleStep * i - Math.PI / 2;
            const radius = innerRadius + (outerRadius - innerRadius) * (director.films / maxFilms);
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            const nodeRadius = 20 + (director.films * 1.5);

            const node = nodes.append("g")
                .attr("transform", `translate(${x}, ${y})`)
                .style("cursor", "pointer")
                .on("mouseenter", (event) => {
                    d3.select(event.currentTarget).select("circle")
                        .transition().duration(150)
                        .attr("r", nodeRadius + 5)
                        .attr("stroke-width", 3);

                    this.tooltip.transition().duration(150).style("opacity", 1);
                    this.tooltip.html(`<strong>${director.name}</strong><br/>${director.films} films${director.complete ? ' • Complete' : ''}`)
                        .style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY - 10) + "px");
                })
                .on("mouseleave", (event) => {
                    d3.select(event.currentTarget).select("circle")
                        .transition().duration(225)
                        .attr("r", nodeRadius)
                        .attr("stroke-width", 2);

                    this.tooltip.transition().duration(225).style("opacity", 0);
                })
                .on("click", () => {
                    this.updateDirectorSpotlight(director.name);
                });

            node.append("circle")
                .attr("r", nodeRadius)
                .attr("fill", "var(--color-bg-card)")
                .attr("stroke", director.complete ? "var(--color-accent-primary)" : "var(--color-accent-secondary)")
                .attr("stroke-width", 2)
                .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");

            node.append("text")
                .attr("text-anchor", "middle")
                .attr("dy", "0.35em")
                .text(director.initials)
                .style("font-family", "var(--font-mono)")
                .style("font-size", "12px")
                .style("font-weight", "bold")
                .style("fill", director.complete ? "var(--color-accent-primary)" : "var(--color-accent-secondary)");

            node.append("circle")
                .attr("cx", nodeRadius * 0.7)
                .attr("cy", -nodeRadius * 0.7)
                .attr("r", 10)
                .attr("fill", director.complete ? "var(--color-accent-primary)" : "var(--color-accent-secondary)");

            node.append("text")
                .attr("x", nodeRadius * 0.7)
                .attr("y", -nodeRadius * 0.7)
                .attr("text-anchor", "middle")
                .attr("dy", "0.35em")
                .text(director.films)
                .style("font-family", "var(--font-mono)")
                .style("font-size", "9px")
                .style("font-weight", "bold")
                .style("fill", "white");
        });
    },

    /**
     * Create Rating "Focus Ring" Lens
     */
    createRatingLens() {
        const container = document.querySelector('.pattern-card--quality .rating-gauge');
        if (!container) return;
        container.innerHTML = '';

        const width = 180;
        const height = 100;
        const rating = PROFILE_DATA.stats.averageRating;

        const svg = d3.select(container).append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("width", "100%")
            .attr("height", height);

        const g = svg.append("g")
            .attr("transform", `translate(${width/2}, ${height - 10})`);

        const arc = d3.arc()
            .innerRadius(55)
            .outerRadius(65)
            .startAngle(-Math.PI / 2)
            .endAngle(Math.PI / 2);

        g.append("path")
            .attr("d", arc)
            .attr("fill", "rgba(255,255,255,0.08)");

        const ratingArc = d3.arc()
            .innerRadius(55)
            .outerRadius(65)
            .startAngle(-Math.PI / 2)
            .endAngle(-Math.PI / 2 + (rating / 10) * Math.PI);

        g.append("path")
            .attr("d", ratingArc)
            .attr("fill", "var(--color-accent-secondary)");

        const scale = d3.scaleLinear().domain([1, 10]).range([-Math.PI/2 + 0.15, Math.PI/2 - 0.15]);

        g.append("g")
            .selectAll("line")
            .data(d3.range(1, 11))
            .join("line")
            .attr("x1", d => Math.cos(scale(d)) * 68)
            .attr("y1", d => Math.sin(scale(d)) * 68)
            .attr("x2", d => Math.cos(scale(d)) * (d % 2 === 0 ? 78 : 73))
            .attr("y2", d => Math.sin(scale(d)) * (d % 2 === 0 ? 78 : 73))
            .attr("stroke", d => d <= rating ? "var(--color-accent-secondary)" : "rgba(255,255,255,0.2)")
            .attr("stroke-width", d => d % 2 === 0 ? 2 : 1);

        const indicatorAngle = scale(rating);
        g.append("circle")
            .attr("cx", Math.cos(indicatorAngle) * 60)
            .attr("cy", Math.sin(indicatorAngle) * 60)
            .attr("r", 5)
            .attr("fill", "var(--color-accent-secondary)")
            .style("filter", "drop-shadow(0 0 4px var(--color-accent-secondary))");

        g.append("text")
            .attr("y", -20)
            .attr("text-anchor", "middle")
            .text(rating.toFixed(2))
            .style("font-family", "var(--font-mono)")
            .style("font-size", "24px")
            .style("font-weight", "bold")
            .style("fill", "var(--color-accent-secondary)");

        g.append("text")
            .attr("y", 0)
            .attr("text-anchor", "middle")
            .text("AVG RATING")
            .style("font-family", "var(--font-mono)")
            .style("font-size", "8px")
            .style("letter-spacing", "0.1em")
            .style("fill", "rgba(255,255,255,0.4)");
    },

    /**
     * Setup interactive behaviors
     */
    setupInteractions() {
        // Era bar projector light effect
        document.querySelectorAll('.era-bar').forEach(bar => {
            bar.addEventListener('mousemove', (e) => {
                const rect = bar.querySelector('.era-bar__track').getBoundingClientRect();
                const x = e.clientX - rect.left;
                bar.style.setProperty('--mouse-x', `${x}px`);
            });
        });

        // Pattern card 3D tilt effect
        document.querySelectorAll('.pattern-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xRot = -1 * ((y - rect.height/2) / (rect.height/2) * 4);
                const yRot = (x - rect.width/2) / (rect.width/2) * 4;
                card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1.01)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });

        // Director grid click
        document.querySelectorAll('.director-node').forEach(node => {
            node.addEventListener('click', () => {
                const directorName = node.dataset.director;
                this.updateDirectorSpotlight(directorName);
            });
        });
    },

    /**
     * Update director spotlight
     */
    updateDirectorSpotlight(directorName) {
        const director = PROFILE_DATA.directors.find(d => d.name === directorName);
        if (!director) return;

        const spotlight = document.getElementById('director-spotlight');
        if (!spotlight) return;

        const nameEl = spotlight.querySelector('.director-spotlight__name');
        const badgeEl = spotlight.querySelector('.director-spotlight__badge');
        const statEl = spotlight.querySelector('.director-spotlight__stat');
        const filmsEl = spotlight.querySelector('.director-spotlight__films');

        if (nameEl) nameEl.textContent = director.name;
        if (badgeEl) {
            badgeEl.textContent = director.complete ? 'COMPLETE FILMOGRAPHY' : 'SELECTED FILMS';
            badgeEl.style.color = director.complete ? 'var(--color-accent-primary)' : 'var(--color-accent-secondary)';
            badgeEl.style.borderColor = director.complete ? 'var(--color-accent-primary)' : 'var(--color-accent-secondary)';
        }
        if (statEl) statEl.textContent = `${director.films} films watched`;

        if (filmsEl && director.filmography) {
            filmsEl.innerHTML = director.filmography.slice(0, 5).map(film => `
                <div class="director-film">
                    <span class="director-film__title">${film.title}</span>
                    <span class="director-film__rating">${film.rating}</span>
                </div>
            `).join('');
        }

        document.querySelectorAll('.director-node').forEach(node => {
            if (node.dataset.director === directorName) {
                node.style.borderColor = "var(--color-text-primary)";
                node.style.background = "rgba(139, 38, 53, 0.05)";
            } else {
                node.style.borderColor = "var(--color-bg-accent)";
                node.style.background = "var(--color-bg-card)";
            }
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Charts.init();
});
