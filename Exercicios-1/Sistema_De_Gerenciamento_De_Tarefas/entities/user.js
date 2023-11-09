let id = 0
class Usuário {
      constructor(nome, email){ 
        this.nome = nome;
        this.email = email;
        this.userTasks = new Array();
        this.id = id++
    }
    }

module.exports = Usuário;