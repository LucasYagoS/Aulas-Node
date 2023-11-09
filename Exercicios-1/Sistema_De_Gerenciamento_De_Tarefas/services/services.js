class Services {
  constructor(repository, tasks, user) {
    this.Repository = repository;
    this.Tasks = tasks;
    this.User = user;
  }

  createTask(título, descrição, dataDeCriação, prioridade) {
    const task = new this.Tasks(título, descrição, dataDeCriação, prioridade);
    this.Repository.saveTasks(task);
  }

  createUser(nome, email) {
    const user = new this.User(nome, email);
    this.Repository.saveUser(user);
  }

  addTaskToUser(taskName, userName) {
    const userIndex = this.Repository.dbUser.findIndex(
      (user) => user.nome === userName
    );
    console.log(userIndex);
    const task = this.searchTaskByName(taskName);
    if (userIndex === -1) {
      return "user not found";
    }
    if (!task) {
      return "task not found";
    }
    this.Repository.saveTaskOnUser(task.id, userIndex);
  }

  searchUserByName(userName) {
    const foundUser = this.Repository.findUserByName(userName);
    if (!foundUser) return "user not found";
    return foundUser
  }

  searchTaskByName(taskTittle) {
    const foundTask = this.Repository.findTaskByName(taskTittle);
    if (!foundTask) return "task not found";
    return foundTask;
  }

  listUserTasks(userName) {
    const foundUser = this.searchUserByName(userName);
    if (!foundUser) {
      return "user not found";
    }
    
    const tasksOfUser = foundUser.userTasks.map((taskId) => {
      const task = this.Repository.dbTasks.find((task) => task.id === taskId);
      if (task) return task
    });

    return tasksOfUser;
  }

  updateTaskById(taskId, título, descrição, dataDeCriação, prioridade) {
    const foundTask = this.Repository.findTaskById(taskId);
    if (!foundTask) return "task not found"
    const data = new this.Tasks(título, descrição, dataDeCriação, prioridade)
    data.id = taskId
    this.Repository.postUpdatedTask(foundTask, data)
  }

  uptateTaskStatus(taskId){
    const foundTask = this.Repository.findTaskById(taskId);
    if(foundTask.dataDeConclusão === "Pendente") return foundTask.dataDeConclusão = new Date()
    return "task not found"
}

deleteTaskById(taskId){
    const foundTaskIndex = this.Repository.dbTasks.findIndex(task => task.id === taskId)
    if(foundTaskIndex === -1) return "task not found"
    this.Repository.deleteTaskFromDb(foundTaskIndex)
}

searchUserByEmail(userEmail) {
    const foundUser = this.Repository.findUserByEmail(userEmail)
    if(!foundUser) return "user not found"
    return foundUser
}

}

module.exports = Services;
