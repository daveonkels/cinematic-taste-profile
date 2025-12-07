# Cinematic Taste Profile

A personal microsite visualizing Dave Onkels' movie-watching data through interactive data visualizations.

## Features

- **Genre DNA** - Voronoi treemap showing genre distribution (Drama 31.3%, Comedy 30.3%, Action 17.6%, etc.) with click-to-explore drawer showing top films per genre
- **Era Timeline** - Animated horizontal bars showing viewing habits by decade (2010s dominant at 37.1%)
- **Director Constellation** - Force-directed graph visualizing frequently watched directors
- **Pattern Cards** - Insights like time-loop film obsession and genre blending patterns
- **Critical Peaks** - Grid of 48 favorite films with locally-cached movie posters

## Tech Stack

- **Vanilla JS** - No frameworks, pure JavaScript
- **D3.js** - Data visualizations (Voronoi, force graphs)
- **CSS Custom Properties** - Theming and responsive design
- **Google Fonts** - Playfair Display, Source Sans 3, JetBrains Mono

## Design

Editorial aesthetic inspired by the Criterion Collection:
- Dark cinematic palette (`#1a1a1a` background)
- Refined typography with serif headings
- Smooth animations (CSS transitions + D3)
- Mobile-responsive layout

## Structure

```
├── index.html          # Main page
├── css/
│   └── styles.css      # All styles + CSS variables
├── js/
│   ├── data.js         # Movie data (genres, eras, films)
│   ├── charts.js       # D3 visualizations
│   ├── animations.js   # Scroll animations
│   ├── tmdb.js         # Local poster loader
│   └── main.js         # App initialization
├── images/
│   └── posters/        # 48 cached movie posters
└── cinema-taste.png    # Header background image
```

## Data Source

Movie data derived from personal Letterboxd viewing history.
