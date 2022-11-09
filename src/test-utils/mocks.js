export const movie = {
  adult: false,
  backdrop_path: '/fBshLiEJcjdfrU3qQBIINcePSsm.jpg',
  belongs_to_collection: null,
  budget: 0,
  genres: [
    { id: 16, name: 'Animation' },
    { id: 878, name: 'Science Fiction' },
    { id: 12, name: 'Adventure' },
    { id: 10751, name: 'Family' },
  ],
  homepage: '',
  id: 877269,
  imdb_id: 'tt10298840',
  original_language: 'en',
  original_title: 'Strange World',
  overview:
    'A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.',
  popularity: 63.426,
  poster_path: '/a9x70QUXs6uEwtin1SGNKoFXoia.jpg',
  production_companies: [
    {
      id: 2,
      logo_path: '/wdrCwmRnLFJhEoH8GSfymY85KHT.png',
      name: 'Walt Disney Pictures',
      origin_country: 'US',
    },
    {
      id: 6125,
      logo_path: '/tzsMJBJZINu7GHzrpYzpReWhh66.png',
      name: 'Walt Disney Animation Studios',
      origin_country: 'US',
    },
  ],
  production_countries: [{ iso_3166_1: 'US', name: 'United States of America' }],
  release_date: '2022-11-23',
  revenue: 0,
  runtime: 102,
  spoken_languages: [
    { english_name: 'English', iso_639_1: 'en', name: 'English' },
    { english_name: 'Slovak', iso_639_1: 'sk', name: 'Slovenčina' },
  ],
  status: 'In Production',
  tagline: 'Journey to a place where nothing is as it appears!',
  title: 'Strange World',
  video: false,
  vote_average: 0.0,
  vote_count: 0,
};

export const movieResponse = movie;

export const movies = [
  {
    adult: false,
    backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
    genre_ids: [18, 80],
    id: 238,
    original_language: 'en',
    original_title: 'The Godfather',
    overview:
      'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    popularity: 105.925,
    poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    release_date: '1972-03-14',
    title: 'The Godfather',
    video: false,
    vote_average: 8.7,
    vote_count: 16846,
  },
  {
    adult: false,
    backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    genre_ids: [18, 80],
    id: 278,
    original_language: 'en',
    original_title: 'The Shawshank Redemption',
    overview:
      'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    popularity: 88.027,
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    release_date: '1994-09-23',
    title: 'The Shawshank Redemption',
    video: false,
    vote_average: 8.7,
    vote_count: 22585,
  },
  {
    adult: false,
    backdrop_path: '/aVFx1VtlOxR3v0ADEatalXOvwbu.jpg',
    genre_ids: [16, 14, 28],
    id: 620249,
    original_language: 'zh',
    original_title: '罗小黑战记',
    overview:
      'In the bustling human world, spirits live peacefully with mankind. Luo Xiaohei, a young cat spirit, becomes a nomad after his forest home is destroyed. His natural talent soon attracts spirits and humans alike, but all of them have their own motivations.',
    popularity: 19.13,
    poster_path: '/aLv87NgRJUPkQ6sVLP72IisDdt4.jpg',
    release_date: '2019-08-27',
    title: 'The Legend of Hei',
    video: false,
    vote_average: 8.7,
    vote_count: 200,
  },
];

export const moviesResponse = {
  page: 1,
  results: movies,
  total_pages: 524,
  total_results: 10469,
};
