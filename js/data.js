/**
 * Cinematic Taste Profile - Data
 * All statistics embedded from profile analysis
 */

const PROFILE_DATA = {
    // Overview Stats
    stats: {
        totalFilms: 819,
        yearsOfCinema: 86,
        averageRating: 6.92,
        medianYear: 2014,
        dateRange: '1939-2025'
    },

    // Genre Breakdown
    genres: [
        { name: 'Drama', count: 256, percent: 31.3, color: '#00f0ff' },
        { name: 'Comedy', count: 248, percent: 30.3, color: '#00d4e0' },
        { name: 'Action', count: 144, percent: 17.6, color: '#00b8c4' },
        { name: 'Adventure', count: 136, percent: 16.6, color: '#8b5cf6' },
        { name: 'Romance', count: 119, percent: 14.5, color: '#ff00aa' },
        { name: 'Thriller', count: 117, percent: 14.3, color: '#a855f7' },
        { name: 'Science Fiction', count: 110, percent: 13.4, color: '#6366f1' },
        { name: 'Family', count: 84, percent: 10.3, color: '#22c55e' },
        { name: 'Animation', count: 79, percent: 9.6, color: '#f59e0b' },
        { name: 'Horror', count: 62, percent: 7.6, color: '#ef4444' }
    ],

    // Era Breakdown
    eras: [
        { decade: '2020s', count: 224, percent: 27.4, primary: false },
        { decade: '2010s', count: 304, percent: 37.1, primary: true },
        { decade: '2000s', count: 161, percent: 19.7, primary: false },
        { decade: '1990s', count: 72, percent: 8.8, primary: false },
        { decade: '1980s', count: 44, percent: 5.4, primary: false },
        { decade: 'Pre-1980', count: 14, percent: 1.6, primary: false }
    ],

    // Time Loop Films
    timeLoopFilms: [
        { title: 'Palm Springs', year: 2020, tmdbId: 587792 },
        { title: 'Groundhog Day', year: 1993, tmdbId: 137 },
        { title: 'Coherence', year: 2014, tmdbId: 220289 },
        { title: 'Edge of Tomorrow', year: 2014, tmdbId: 137113 },
        { title: 'Arrival', year: 2016, tmdbId: 329865 },
        { title: 'About Time', year: 2013, tmdbId: 122906 },
        { title: 'Looper', year: 2012, tmdbId: 59967 },
        { title: 'Interstellar', year: 2014, tmdbId: 157336 },
        { title: 'Boss Level', year: 2020, tmdbId: 548473 },
        { title: 'Happy Death Day', year: 2017, tmdbId: 440021 },
        { title: 'Predestination', year: 2014, tmdbId: 206487 },
        { title: 'Triangle', year: 2009, tmdbId: 26767 }
    ],

    // Genre Combinations
    genreCombos: [
        { pair: 'Drama + Comedy', count: 45 },
        { pair: 'Action + Adventure', count: 38 },
        { pair: 'Romance + Comedy', count: 35 },
        { pair: 'Sci-Fi + Thriller', count: 22 },
        { pair: 'Family + Animation', count: 28 }
    ],

    // Directors
    directors: [
        {
            name: 'Christopher Nolan',
            initials: 'CN',
            films: 10,
            complete: true,
            filmography: [
                { title: 'Inception', year: 2010, rating: 8.8, tmdbId: 27205 },
                { title: 'Interstellar', year: 2014, rating: 8.7, tmdbId: 157336 },
                { title: 'Memento', year: 2000, rating: 8.4, tmdbId: 77 },
                { title: 'Batman Begins', year: 2005, rating: 8.2, tmdbId: 272 },
                { title: 'Dunkirk', year: 2017, rating: 7.8, tmdbId: 374720 },
                { title: 'The Dark Knight', year: 2008, rating: 7.8, tmdbId: 155 },
                { title: 'The Dark Knight Rises', year: 2012, rating: 7.6, tmdbId: 49026 },
                { title: 'The Prestige', year: 2006, rating: 7.5, tmdbId: 1124 },
                { title: 'Oppenheimer', year: 2023, rating: 7.4, tmdbId: 872585 },
                { title: 'Tenet', year: 2020, rating: 7.3, tmdbId: 577922 }
            ]
        },
        {
            name: 'Denis Villeneuve',
            initials: 'DV',
            films: 5,
            complete: false,
            filmography: [
                { title: 'Arrival', year: 2016, rating: 8.0, tmdbId: 329865 },
                { title: 'Blade Runner 2049', year: 2017, rating: 8.0, tmdbId: 335984 },
                { title: 'Dune', year: 2021, rating: 7.8, tmdbId: 438631 },
                { title: 'Sicario', year: 2015, rating: 7.5, tmdbId: 273481 },
                { title: 'Prisoners', year: 2013, rating: 7.5, tmdbId: 146233 }
            ]
        },
        {
            name: 'Russo Brothers',
            initials: 'RB',
            films: 4,
            complete: false
        },
        {
            name: 'Richard Linklater',
            initials: 'RL',
            films: 3,
            complete: false
        },
        {
            name: 'Taika Waititi',
            initials: 'TW',
            films: 3,
            complete: false
        }
    ],

    // Critical Peaks - Dave's Favorite Films
    highestRated: [
        { title: 'Interstellar', year: 2014, tmdbId: 157336, posterPath: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', genres: 'Science Fiction, Adventure' },
        { title: 'Gravity', year: 2013, tmdbId: 49047, posterPath: '/kZ2nZw8D681aphje8NJi8EfbL1U.jpg', genres: 'Science Fiction, Thriller' },
        { title: 'The Matrix', year: 1999, tmdbId: 603, posterPath: '/qK76PKQLd6zlMn0u83Ej9YQOqPL.jpg', genres: 'Action, Science Fiction' },
        { title: 'Back to the Future', year: 1985, tmdbId: 105, posterPath: '/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg', genres: 'Adventure, Comedy' },
        { title: 'Parasite', year: 2019, tmdbId: 496243, posterPath: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', genres: 'Drama, Comedy' },
        { title: 'Dune', year: 2021, tmdbId: 438631, posterPath: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', genres: 'Science Fiction, Adventure' },
        { title: 'WALL·E', year: 2008, tmdbId: 10681, posterPath: '/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg', genres: 'Animation, Family' },
        { title: '2001: A Space Odyssey', year: 1968, tmdbId: 62, posterPath: '/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg', genres: 'Science Fiction, Mystery' },
        { title: 'Oppenheimer', year: 2023, tmdbId: 872585, posterPath: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', genres: 'Drama, History' },
        { title: 'Catch Me If You Can', year: 2002, tmdbId: 640, posterPath: '/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg', genres: 'Drama, Crime' },
        { title: 'Her', year: 2013, tmdbId: 152601, posterPath: '/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg', genres: 'Romance, Science Fiction' },
        { title: 'The Martian', year: 2015, tmdbId: 286217, posterPath: '/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg', genres: 'Science Fiction, Adventure' },
        { title: 'Contact', year: 1997, tmdbId: 686, posterPath: '/bCpMIywuNZeWt3i5UMLEIc0VSwM.jpg', genres: 'Drama, Science Fiction' },
        { title: 'Arrival', year: 2016, tmdbId: 329865, posterPath: '/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg', genres: 'Science Fiction, Drama' },
        { title: 'A Christmas Story', year: 1983, tmdbId: 850, posterPath: '/34nSHYqmb7222tiqiuKqKJmZiQa.jpg', genres: 'Comedy, Family' },
        { title: 'Edge of Tomorrow', year: 2014, tmdbId: 137113, posterPath: '/xjw5trHV7Mwo61P0kCTy8paEkgO.jpg', genres: 'Action, Science Fiction' },
        { title: 'Star Trek', year: 2009, tmdbId: 13475, posterPath: '/hN2ZtF3Uw6mhIHZiqL0SKzELtKn.jpg', genres: 'Science Fiction, Action' },
        { title: 'About Time', year: 2013, tmdbId: 122906, posterPath: '/iR1bVfURbN7r1C46WHFbwCkVve.jpg', genres: 'Drama, Fantasy' },
        { title: 'The Breakfast Club', year: 1985, tmdbId: 2108, posterPath: '/wM9ErA8UVdcce5P4oefQinN8VVV.jpg', genres: 'Comedy, Drama' },
        { title: 'Cast Away', year: 2000, tmdbId: 8358, posterPath: '/7lLJgKnAicAcR5UEuo8xhSMj18w.jpg', genres: 'Adventure, Drama' },
        { title: 'Dunkirk', year: 2017, tmdbId: 374720, posterPath: '/b4Oe15CGLL61Ped0RAS9JpqdmCt.jpg', genres: 'Action, Drama' },
        { title: 'Ferris Bueller\'s Day Off', year: 1986, tmdbId: 9377, posterPath: '/9LTQNCvoLsKXP0LtaKAaYVtRaQL.jpg', genres: 'Comedy' },
        { title: 'Get Out', year: 2017, tmdbId: 419430, posterPath: '/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg', genres: 'Horror, Thriller' },
        { title: 'Palm Springs', year: 2020, tmdbId: 587792, posterPath: '/gnAfqiV7yO3Jq9IntTmwkcaICqc.jpg', genres: 'Comedy, Romance' },
        { title: 'Once', year: 2007, tmdbId: 5723, posterPath: '/7nW363kSYRCkr4VGOMvuSGwtzKs.jpg', genres: 'Drama, Romance' },
        { title: 'Apollo 13', year: 1995, tmdbId: 568, posterPath: '/tVeKscCm2fY1xDXZk8PgnZ87h9S.jpg', genres: 'Drama, History' },
        { title: 'Midnight in Paris', year: 2011, tmdbId: 59436, posterPath: '/4wBG5kbfagTQclETblPRRGihk0I.jpg', genres: 'Fantasy, Comedy' },
        { title: 'Minority Report', year: 2002, tmdbId: 180, posterPath: '/qtgFcnwh9dAFLocsDk2ySDVS8UF.jpg', genres: 'Action, Science Fiction' },
        { title: 'Moana', year: 2016, tmdbId: 277834, posterPath: '/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg', genres: 'Animation, Family' },
        { title: 'Office Space', year: 1999, tmdbId: 1542, posterPath: '/v7fBXxHZ5WQn2PGgpXhTqHgtcJk.jpg', genres: 'Comedy' },
        { title: 'The Aviator', year: 2004, tmdbId: 2567, posterPath: '/lx4kWcZc3o9PaNxlQpEJZM17XUI.jpg', genres: 'Drama, History' },
        { title: 'Tron', year: 1982, tmdbId: 97, posterPath: '/zwSFEczP7AzqugAHHIX3zHniT0t.jpg', genres: 'Science Fiction, Action' },
        { title: 'The Secret Life of Walter Mitty', year: 2013, tmdbId: 116745, posterPath: '/tY6ypjKOOtujhxiSwTmvA4OZ5IE.jpg', genres: 'Adventure, Comedy' },
        { title: 'Grosse Pointe Blank', year: 1997, tmdbId: 9434, posterPath: '/7lQ0MSNQqBTYpXTTZL82u1n95Z3.jpg', genres: 'Comedy, Action' },
        { title: 'Tenet', year: 2020, tmdbId: 577922, posterPath: '/k68nPLbIST6NP96JmTxmZijEvCA.jpg', genres: 'Action, Science Fiction' },
        { title: '10 Cloverfield Lane', year: 2016, tmdbId: 333371, posterPath: '/84Dhwz93vCin6T1PX6ctSvWEuNE.jpg', genres: 'Horror, Thriller' },
        { title: 'The Hunger Games', year: 2012, tmdbId: 70160, posterPath: '/yXCbOiVDCxO71zI7cuwBRXdftq8.jpg', genres: 'Action, Adventure' },
        { title: 'Better Off Dead', year: 1985, tmdbId: 13667, posterPath: '/pHmbSkpxdB7jXozrovEfacArtW0.jpg', genres: 'Comedy, Romance' },
        { title: 'Elf', year: 2003, tmdbId: 10719, posterPath: '/oOleziEempUPu96jkGs0Pj6tKxj.jpg', genres: 'Comedy, Family' },
        { title: 'Midsommar', year: 2019, tmdbId: 530385, posterPath: '/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg', genres: 'Horror, Drama' },
        { title: 'Tommy Boy', year: 1995, tmdbId: 11381, posterPath: '/jeEM8v1OA9u6F5NC2lzXD04Ls1U.jpg', genres: 'Comedy' },
        { title: 'WarGames', year: 1983, tmdbId: 860, posterPath: '/zZ1rN4LoPxKNfAp67Xl300WxVeD.jpg', genres: 'Science Fiction, Thriller' },
        { title: 'Top Gun', year: 1986, tmdbId: 744, posterPath: '/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg', genres: 'Action, Drama' },
        { title: 'Bohemian Rhapsody', year: 2018, tmdbId: 424694, posterPath: '/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg', genres: 'Drama, Music' },
        { title: 'Alien', year: 1979, tmdbId: 348, posterPath: '/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg', genres: 'Horror, Science Fiction' },
        { title: 'Good Will Hunting', year: 1997, tmdbId: 489, posterPath: '/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg', genres: 'Drama, Romance' },
        { title: 'Dead Poets Society', year: 1989, tmdbId: 207, posterPath: '/erzbMlcNHOdx24AXOcn2ZKA7R1q.jpg', genres: 'Drama, Comedy' },
        { title: 'Yesterday', year: 2019, tmdbId: 515195, posterPath: '/9fYka5CQt9nrb6LOtKicysUf9NA.jpg', genres: 'Comedy, Music, Romance' }
    ],

    // Top Films by Genre (IMDB ratings from user's watched films)
    genreTopFilms: {
        'Drama': [
            { title: 'Forrest Gump', year: 1994, rating: 8.8, tmdbId: 13, posterPath: '/saHP97rTPS5eLmrLQEcANmKrsFl.jpg' },
            { title: 'Saving Private Ryan', year: 1998, rating: 8.6, tmdbId: 857, posterPath: '/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg' },
            { title: 'The Silence of the Lambs', year: 1991, rating: 8.6, tmdbId: 274, posterPath: '/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg' },
            { title: 'Parasite', year: 2019, rating: 8.5, tmdbId: 496243, posterPath: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
            { title: 'The Departed', year: 2006, rating: 8.5, tmdbId: 1422, posterPath: '/nT97ifVT2J1yMQmeq20Qblg61T.jpg' }
        ],
        'Comedy': [
            { title: 'Forrest Gump', year: 1994, rating: 8.8, tmdbId: 13, posterPath: '/saHP97rTPS5eLmrLQEcANmKrsFl.jpg' },
            { title: 'Pulp Fiction', year: 1994, rating: 8.8, tmdbId: 680, posterPath: '/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg' },
            { title: 'Back to the Future', year: 1985, rating: 8.5, tmdbId: 105, posterPath: '/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg' },
            { title: 'Parasite', year: 2019, rating: 8.5, tmdbId: 496243, posterPath: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
            { title: 'Toy Story', year: 1995, rating: 8.3, tmdbId: 862, posterPath: '/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg' }
        ],
        'Action': [
            { title: 'The Lord of the Rings: The Return of the King', year: 2003, rating: 9.0, tmdbId: 122, posterPath: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' },
            { title: 'Inception', year: 2010, rating: 8.8, tmdbId: 27205, posterPath: '/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg' },
            { title: 'The Matrix', year: 1999, rating: 8.7, tmdbId: 603, posterPath: '/qK76PKQLd6zlMn0u83Ej9YQOqPL.jpg' },
            { title: 'Star Wars', year: 1977, rating: 8.6, tmdbId: 11, posterPath: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg' },
            { title: 'Avengers: Endgame', year: 2019, rating: 8.4, tmdbId: 299534, posterPath: '/or06FN3Dber5HObMic0HGOBBjVB.jpg' }
        ],
        'Adventure': [
            { title: 'The Lord of the Rings: The Return of the King', year: 2003, rating: 9.0, tmdbId: 122, posterPath: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg' },
            { title: 'Inception', year: 2010, rating: 8.8, tmdbId: 27205, posterPath: '/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg' },
            { title: 'Interstellar', year: 2014, rating: 8.7, tmdbId: 157336, posterPath: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
            { title: 'Star Wars', year: 1977, rating: 8.6, tmdbId: 11, posterPath: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg' },
            { title: 'Back to the Future', year: 1985, rating: 8.5, tmdbId: 105, posterPath: '/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg' }
        ],
        'Romance': [
            { title: 'A Beautiful Mind', year: 2001, rating: 8.2, tmdbId: 453, posterPath: '/rEIg5yJdNOt9fmX4P8gU9LeNoTQ.jpg' },
            { title: 'Before Sunset', year: 2004, rating: 8.1, tmdbId: 80, posterPath: '/gycdE1ARByGQcK4fYR2mgpU6OO.jpg' },
            { title: 'Beauty and the Beast', year: 1991, rating: 8.0, tmdbId: 10020, posterPath: '/hUJ0UvQ5tgE2Z9WpfuduVSdiCiU.jpg' },
            { title: 'Groundhog Day', year: 1993, rating: 8.0, tmdbId: 137, posterPath: '/gCgt1WARPZaXnq523ySQEUKinCs.jpg' },
            { title: 'The Notebook', year: 2004, rating: 7.8, tmdbId: 11036, posterPath: '/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg' }
        ],
        'Thriller': [
            { title: 'Pulp Fiction', year: 1994, rating: 8.8, tmdbId: 680, posterPath: '/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg' },
            { title: 'The Silence of the Lambs', year: 1991, rating: 8.6, tmdbId: 274, posterPath: '/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg' },
            { title: 'The Departed', year: 2006, rating: 8.5, tmdbId: 1422, posterPath: '/nT97ifVT2J1yMQmeq20Qblg61T.jpg' },
            { title: 'Memento', year: 2000, rating: 8.4, tmdbId: 77, posterPath: '/fKTPH2WvH8nHTXeBYBVhawtRqtR.jpg' },
            { title: 'Black Swan', year: 2010, rating: 8.0, tmdbId: 44214, posterPath: '/viWheBd44bouiLCHgNMvahLThqx.jpg' }
        ],
        'Science Fiction': [
            { title: 'Interstellar', year: 2014, rating: 8.7, tmdbId: 157336, posterPath: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
            { title: 'The Matrix', year: 1999, rating: 8.7, tmdbId: 603, posterPath: '/qK76PKQLd6zlMn0u83Ej9YQOqPL.jpg' },
            { title: 'Alien', year: 1979, rating: 8.5, tmdbId: 348, posterPath: '/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg' },
            { title: '2001: A Space Odyssey', year: 1968, rating: 8.3, tmdbId: 62, posterPath: '/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg' },
            { title: 'Blade Runner', year: 1982, rating: 8.1, tmdbId: 78, posterPath: '/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg' }
        ],
        'Family': [
            { title: 'The Lion King', year: 1994, rating: 8.5, tmdbId: 8587, posterPath: '/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg' },
            { title: 'Coco', year: 2017, rating: 8.4, tmdbId: 354912, posterPath: '/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg' },
            { title: 'WALL·E', year: 2008, rating: 8.4, tmdbId: 10681, posterPath: '/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg' },
            { title: 'Up', year: 2009, rating: 8.3, tmdbId: 14160, posterPath: '/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg' },
            { title: 'Toy Story 3', year: 2010, rating: 8.3, tmdbId: 10193, posterPath: '/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg' }
        ],
        'Animation': [
            { title: 'WALL·E', year: 2008, rating: 8.4, tmdbId: 10681, posterPath: '/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg' },
            { title: 'Coco', year: 2017, rating: 8.4, tmdbId: 354912, posterPath: '/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg' },
            { title: 'Toy Story', year: 1995, rating: 8.3, tmdbId: 862, posterPath: '/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg' },
            { title: 'Toy Story 3', year: 2010, rating: 8.3, tmdbId: 10193, posterPath: '/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg' },
            { title: 'Up', year: 2009, rating: 8.3, tmdbId: 14160, posterPath: '/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg' }
        ],
        'Horror': [
            { title: 'Alien', year: 1979, rating: 8.5, tmdbId: 348, posterPath: '/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg' },
            { title: 'Get Out', year: 2017, rating: 7.7, tmdbId: 419430, posterPath: '/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg' },
            { title: '10 Cloverfield Lane', year: 2016, rating: 7.2, tmdbId: 333371, posterPath: '/84Dhwz93vCin6T1PX6ctSvWEuNE.jpg' },
            { title: 'Happy Death Day', year: 2017, rating: 6.5, tmdbId: 440021, posterPath: '/cTaEIUYTt52ooq9quVbAQ7NpGwo.jpg' },
            { title: 'Happy Death Day 2U', year: 2019, rating: 6.1, tmdbId: 512196, posterPath: '/4tdnePOkOOzwuGPEOAHp8UA4vqx.jpg' }
        ]
    },

    // Avoid Genres
    avoidGenres: [
        { genre: 'Western', percent: 0.1, count: 1 },
        { genre: 'Musical', percent: 0.6, count: 5 },
        { genre: 'War', percent: 1.1, count: 9 },
        { genre: 'Pure Horror', percent: 7.6, count: 62, note: 'Prefers horror blended with sci-fi/thriller' }
    ],

    // Thematic Preferences
    themes: [
        {
            id: 'romance',
            title: 'Romance with Depth',
            description: 'Love stories that transcend the meet-cute, blending fantasy or comedy elements.',
            examples: ['About Time', 'Before Sunset', 'Palm Springs']
        },
        {
            id: 'found-family',
            title: 'Found Family & Loyalty',
            description: 'Bonds forged through adventure and adversity. The team that becomes home.',
            examples: ['MCU', 'LOTR', 'Star Wars']
        },
        {
            id: 'redemption',
            title: 'Redemption Arcs',
            description: 'Characters transforming through struggle, earning their second chance.',
            examples: ['Forrest Gump', 'A Beautiful Mind', 'Beautiful Boy']
        },
        {
            id: 'existential',
            title: 'Existential Questions',
            description: 'Films that probe the nature of existence, time, and human purpose.',
            examples: ['Arrival', 'Interstellar', '2001: A Space Odyssey']
        },
        {
            id: 'underdog',
            title: 'Underdog Stories',
            description: 'Against-the-odds triumphs that celebrate perseverance and human spirit.',
            examples: ['Apollo 13', 'Captain Fantastic', 'Wonder']
        }
    ],

    // Recommendation Criteria
    recommendations: {
        matches: [
            'High-concept sci-fi with emotional core',
            'Time-loop / temporal mechanics',
            'Ensemble casts with character depth',
            'Genre-bending execution',
            'Romance with substance',
            'Intelligent blockbusters',
            'Animation with adult resonance',
            'Contained puzzle thrillers'
        ],
        misses: [
            'Pure slasher horror',
            'Slow-burn art films',
            'Musical theater adaptations',
            'Pure war combat films',
            'Experimental cinema'
        ]
    },

    // Profile Identity
    identity: {
        archetype: 'Thoughtful Populist',
        tagline: 'Give me smart, heartfelt stories with high concepts, genre-bending execution, and enough depth to reward repeated viewing.',
        summary: 'A genre-fluid taste that values emotional authenticity, intellectual engagement, and production quality. Not a film snob, but with standards. Appreciates spectacle when earned and intimacy when genuine.'
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROFILE_DATA;
}
