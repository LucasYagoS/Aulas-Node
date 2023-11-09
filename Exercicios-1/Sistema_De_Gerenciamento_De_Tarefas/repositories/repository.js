class Repository {
  constructor(dbUser, dbTasks) {
    this.dbUser = dbUser;
    this.dbTasks = dbTasks;
  }

  saveUser(user) {
    this.dbUser.push(user);
  }

  saveTasks(task) {
    this.dbTasks.push(task);
  }

  saveUser(user){
    this.dbUser.push(user);
  }

  deleteTaskFromDb(taskIndex) {
    this.dbTasks.splice(taskIndex, 1);
  }

  saveTaskOnUser(taskId, userIndex){
    this.dbUser[userIndex].userTasks.push(taskId)
  }

  findTaskByName(taskTittle){
    const foundTask = this.dbTasks.find(task => task.titulo === taskTittle);
    return foundTask
  }

  findUserByName(userName){
    const foundUser = this.dbUser.find(user => user.nome === userName);
    return foundUser
  }

  findTaskById(taskId){
    const foundTask = this.dbTasks.find(task => task.id === taskId);
    return foundTask
  }

  postUpdatedTask(task, data){
    Object.assign(task, data);
  }

  findUserByEmail(userEmail){
    const foundUser = this.dbUser.find((user) => user.email === userEmail)
    return foundUser
  }
  
}


module.exports = Repository;