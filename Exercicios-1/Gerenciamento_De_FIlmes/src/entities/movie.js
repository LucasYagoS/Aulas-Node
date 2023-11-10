let movieId = 0
class Movie {
    constructor(tittle, description, release, director, genre) {
        this.titulo = tittle
        this.descrição = description
        this.Lançamento = release
        this.diretor = director
        this.genero = genre
        this.id = movieId++
    }
}

module.exports = Movie