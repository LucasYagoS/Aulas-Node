class MovieRepository {
    constructor(dbMovie , dbActings){
        this.dbMovie = dbMovie;
        this.dbActings = dbActings
    }

    saveMovie(movie){
        this.dbMovie.push(movie);
    }

    findMovieByName(name){
        const foundMovie = this.dbMovie.find(movie => movie.titulo === name)
        return foundMovie
    }

    findAllMoviesByDirector(directorName){
        const foundMovies = this.dbMovie.filter(movie => movie.diretor === directorName)
        return foundMovies
    }

    saveUpdatedMovie(movie, newData){
        Object.assign(movie, newData);
    }

    findMovieById(movieId){
        const foundMovie = this.dbMovie.find(movie => movie.id === movieId)
        return foundMovie
    }

    findMovieIndexById(movieId){
        const foundMovie = this.dbMovie.findIndex(movie => movie.id === movieId)
        return foundMovie
    }

    deleteMovieById(movieIndex){
        this.dbMovie.splice(movieIndex, 1)
    }
    // Parte de Atores

    saveActor(actor){
        this.dbActings.push(actor)
    }

    findAllActingsByActor(actorName){
        const foundActings = this.dbActings.fiter(acting => acting.ator === actorName)
        return foundActings
    }

    findAllActingsOfAnMovie(movieId){
        const foundActings = this.dbActings.filter(acting => acting.movieId === movieId)
        return foundActings
    }

    findActingById(actingId){
        const foundActing = this.dbActings.find(acting => acting.id === actingId)
        return foundActing
    }

    saveUpdatedActing(acting, newData){
        Object.assign(acting, newData)
    }

    findActingByIndex(actingId){
        const foundActing = this.dbActings.findIndex(acting => acting.id === actingId)
        return foundActing
    }

    deleteActingById(actingIndex){
        this.dbActings.splice(actingIndex, 1)
    }
}

module.exports = MovieRepository;