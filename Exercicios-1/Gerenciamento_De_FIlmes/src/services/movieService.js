class MovieService {
    constructor(repository, movie, actor){
        this.repository = repository;
        this.movie = movie;
        this.actor = actor;
    }

    createMovie(tittle, description, realase, director, genre){
        const movie = new this.movie(tittle, description, realase, director, genre)
        this.repository.saveMovie(movie)
    }

    searchMovieByName(name){
        const foundMovie = this.repository.findMovieByName(name)
        if(!foundMovie) return "movie not found"
        return foundMovie
    }

    searchAllMoviesByDirector(diretorName){
        const foundMovies = this.repository.findAllMoviesByDirector(diretorName)
        if(!foundMovies) return "movie not found"
        return foundMovies
    }

    updtadeMovieById(movieId, tittle, description, realase, director, genre){
        const foundMovie = this.repository.findMovieById(movieId)
        if(!foundMovie) return "movie not found"
        const newData = new this.movie(tittle, description, realase, director, genre)
        newData.id = movieId
        this.repository.saveUpdatedMovie(foundMovie, newData)
    }
    
    removeMovieById(movieId){
        const foundMovieIndex = this.repository.findMovieIndexById(movieId)
        if(!foundMovieIndex) return "movie not found"
        this.repository.deleteMovieById(foundMovieIndex)
    }
    //Parte de atores

    createActor(actorName, role, movieId){
        const actor = new this.actor(actorName, role, movieId)
        this.repository.saveActor(actor)
    }

    searchAllActingsByActor(actorName){
        const foundActings = this.repository.findAllActingsByActor(actorName)
        if(!foundActings) return "nothing found"
        return foundActings
    }

    searchAllActingsOfAnMovie(movieId){
        const foundActings = this.repository.findAllActingsOfAnMovie(movieId)
        if(!foundActings) return "nothing found"
        return foundActings
    }

    updateActing(actingId, actorName, role, movieId){
        const foundActing = this.repository.findActingById(actingId)
        if(!foundActing) return "Acting not found"
        const newData = new this.actor(actorName, role, movieId)
        newData.id = actingId
        this.repository.saveUpdatedActing(foundActing, newData)
    }

    removeActingById(actingId){
        const foundActingIndex = this.repository.findActingByIndex(actingId)
        if(!foundActingIndex) return "acting not found"
        this.repository.deleteActingById(foundActingIndex)
    }

}

module.exports = MovieService;