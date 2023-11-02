// # Sistema Blog
// OBS: Crie o sistema utilizando as camadas Entities/Repositories/Services

// ## Entidade

// User {
//   id: string
//   nickname: string
//   email: string
//   password: string
//   posts: array
//   createdAt: string
// }

// Post {
//   id: string
//   content: string
//   createdAt: string
// }

// ## Casos de uso

// - Deve ser possível criar um usuário, passando: email, password, nickname
// - Deve ser possível atualizar um usuário
// - Deve ser possível busca um usuário
// - Deve ser possível buscar um usuário pelo id
// - Deve ser possível buscar um usuário pelo email
// - Deve ser possível criar um post relacionado a um usuário, passando: content
let idCounter = 0;
let postId = 0;
const repository = [];


const createUser = (email, password, nickname) => {
  const user = {
    Id: idCounter++,
    Nickname: nickname,
    Email: email,
    Password: password,
    createdAt: new Date(),
    Posts: [],
  };

  repository.push(user);
};

createUser("Lucas@lucas", "12356", "LucasYago");
createUser("Lucas@lucas", "12356", "LucasYago");
createUser("Lucas@lucas", "12356", "LucasYago");


const findUserById = (id) => {
  const user = repository.find((user) => user.Id === id);
  if (!user) {
    return "user not found";
  }
  return user;
};
const findUserByEmail = (email) => {
  const user = repository.find((user) => user.Email === email);
  if (!user) {
    return "user not found";
  }
  return user;
};

const updateUser = (email, password, nickname, id) => {
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
};

const createPost = (post, id) => {
  const user = repository.find((user) => user.Id === id);
  if (!user) {
   return "User not found";
  }
  user.Posts.push({ Content: post, Id: postId++, createdAt: new Date() });
  return user;
};

createPost("apwodmapwdmapwofm", 1);
createPost("apwodmapwdmapwofm", 1);
createPost("apwodmapwdmapwofm", 1);
createPost("apwodmapwdmapwofm", 1);

const findPost = (id, postId) => {
  const user = findUserById(id);
  if (!user) {
    return "user not found";
  }
  const foundPost = user.Posts.find((post) => post.Id === postId);
  return foundPost;
};

const deleteUser = (id) => {
  const index = repository.findIndex((user) => user.Id === id);
  if (!index) {
    return "User not found";
  }
  repository.splice(index, 1);
};
const deletePost = (id, postId) => {
  const user = findUserById(id);
  if (!user) {
    return "User not found";
  }
  const postIndex = user.Posts.findIndex((post) => post.Id === postId);
  if (!postIndex) {
    return "post not found";
  }
  user.Posts.splice(postIndex, 1);
};
const updatePost = (id, postId, newContent) => {
  const post = findPost(id, postId);
  if (!post) {
    return "post not found";
  }
  post.Content = newContent;
  return post;
};

// console.log(updatePost(5, 1, "Hello world"));
// console.log(updateUser("Lucas@lucas", "54321", "YagoLucas", 2));


cents = [135151, 41351351 , 5135135, 6123 , 712 , 81245]
const brl = cents.map((value) => {
  
  return (value / 100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });
  
})

// console.log(brl);
console.log(repository[1])