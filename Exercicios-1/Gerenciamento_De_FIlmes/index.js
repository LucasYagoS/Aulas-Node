const Movie = require ('./src/entities/movie.js')
const Acting = require ("./src/entities/acting.js")
const MovieRepository = require ('./src/repositories/movieRepository.js')
const MovieService = require ('./src/services/movieService.js')


const dbMovie = []
const dbActings = []
const movieRepository = new MovieRepository(dbMovie, dbActings)
const movieService= new MovieService(movieRepository, Movie, Acting)

movieService.createMovie("título", "descrição", "ano de lançamento", "diretor", "gênero")
movieService.createMovie("título", "descrição", "ano de lançamento", "diretor", "gênero")
movieService.createMovie("título", "descrição", "ano de lançamento", "diretor", "gênero")
movieService.updtadeMovieById(0, "cavalo", "oemadom", "oamfoeam")
console.log(movieRepository.dbMovie)