let id = 0
class Tarefa {
  constructor(título, descrição, dataDeCriação, prioridade) {
    this.titulo = título;
    this.descrição = descrição
    this.dataDeCriação = dataDeCriação
    this.dataDeConclusão = "Pendente"
    this.prioridade = prioridade
    this.id = id++
  }
}

module.exports = Tarefa;