let idCounter = 0;
let postId = 0;
let dataBase = []

class Repository {
  constructor(repository) {
    this.repository = repository;
  }

  createUser(email, password, username) {
    const user = new User(email, password, username);
    return user;
  }

  postUser(email, password, username) {
    const user = this.createUser(email, password, username);
    this.repository.push(user);
  }

  findUserById(id) {
    const user = this.repository.find((user) => {
      user.Id === id;
    });
    if (!user) {
      return "user not found";
    }
    return user;
  }

  findUserByEmail(email) {
    const user = this.repository.find((user) => {
      user.Email === email;
    });
    if (!user) {
      return "user not found";
    }
    return user;
  }

  updateUser(email, password, nickname, id) {
    const user = findUserById(id);
    if (!user) {
      return "User not found";
    }
    Object.assign(user, {
      Email: email,
      Password: password,
      Nickname: nickname,
    });
    return repository;
  }

  createPost(post, id) {
    const user = this.repository.find((user) => user.Id === id);
    if (!user) {
      return "User not found";
    }
    user.Posts.push({ Content: post, Id: postId++, createdAt: new Date() });
    return user;
  }

  findPost(id, postId) {
    const user = findUserById(id);
    if (!user) {
      return "user not found";
    }
    const foundPost = user.Posts.find((post) => post.Id === postId);
    return foundPost;
  }

  deleteUser(id) {
    const index = this.repository.findIndex((user) => user.Id === id);
    if (!index) {
      return "User not found";
    }
    repository.splice(index, 1);
  }

  deletePost(id, postId) {
    const user = findUserById(id);
    if (!user) {
      return "User not found";
    }
    const postIndex = user.Posts.findIndex((post) => post.Id === postId);
    if (!postIndex) {
      return "post not found";
    }
    user.Posts.splice(postIndex, 1);
  }

  updatePost(id, postId, newContent) {
    const post = findPost(id, postId);
    if (!post) {
      return "post not found";
    }
    post.Content = newContent;
    return post;
  }
}

class User {
  constructor(email, password, nickname) {
    this.Id = idCounter++;
    this.Nickname = nickname;
    this.Email = email;
    this.Password = password;
    this.createdAt = new Date();
    this.Posts = [];
  }
}

const bancoDeDados = new Repository(dataBase);

bancoDeDados.postUser("lucas@lucas", "12345", "Yago")

console.log(bancoDeDados.repository)

