// ## Sistema de Gerenciamento de Tarefas

// ### Entidades

// Tarefa {
//   título
//   descrição
//   data de criação
//   data de conclusão
//   prioridade
// }

// Usuário {
//   nome
//   email
// }

// ### Casos de Uso

// 1. Deve ser possível cadastrar uma tarefa, fornecendo as seguintes informações: título, descrição, data de criação, data de conclusão (opcional) e prioridade.
// 2. Deve ser possível buscar uma tarefa pelo título.
// 3. Deve ser possível listar todas as tarefas de um determinado usuário.
// 4. Deve ser possível atualizar as informações de uma tarefa, fornecendo o seu ID.
// 5. Deve ser possível marcar uma tarefa como concluída, fornecendo o seu ID.
// 6. Deve ser possível excluir uma tarefa pelo seu ID.
// 7. Deve ser possível cadastrar um usuário, fornecendo as informações: nome e email.
// 8. Deve ser possível buscar um usuário pelo seu email.
// 9. Deve ser possível listar todas as tarefas de um usuário, incluindo as tarefas concluídas e as pendentes.

const Tasks = require ('./entities/tasks.js')
const User = require ('./entities/user.js')
const Repository = require ('./repositories/repository.js')
const Services = require ('./services/services.js')

let userDb = []
let tasksDb = []

const repository = new Repository(userDb, tasksDb)
const services = new Services(repository, Tasks, User)

services.createTask("Limpar o chão", "limpar toda a casa", "07/12/2001", 3)
services.createTask("Limpar a casa", "limpar toda a casa", "07/12/2001", 3)
services.createUser("Lucas", "lucas@lucas")
services.addTaskToUser("Limpar o chão", "Lucas")
services.updateTaskById(0, "rola", "rola", "rola", 2)
services.uptateTaskStatus(0)
services.deleteTaskById(0)
console.log(repository.dbTasks)


