// crie uma função factory que gera um Student
// Parametros: name, class, status, document
// Retorno {
//   code: 'uuid',
//   name: ''Victor,
//   class: '401B',
//   status: 'matriculado' || 'pendente,
//   document: '123.123.123-00',
//   createdAt: '2015-04-12' tipo Date
// }

let studentCount = 1;

function makeStudent(data) {
  repository.push(data);
}

// Crie as funçao para manipular a constante repository
// Deve ser possível:
// - Criar;
// - Editar por código;
// - Buscar por código;
// - Buscar por Turma;
// - Deletar.

const repository = [];

function createStudentRepository(data) {
  const obj = { ...data, code: studentCount++, createdAt: new Date() };
  makeStudent(obj);
}

function updateStudentRepository(code, data) {
  const index = repository.findIndex((student) => student.code === code);
  if (index !== -1) {
    repository[index].code = code;
    if (data.name !== undefined) {
      repository[index].name = data.name;
    }
    if (data.class !== undefined) {
      repository[index].class = data.class;
    } else {
        repository[index].class = undefined
    }
    if (data.status !== undefined) {
      repository[index].status = data.status;
    }
  }
}

function findStudentByCodeRepository(code) {
  const foundStudent = repository.find((student) => student.code === code);
  return foundStudent;
}

function findStudentByClassRepository(className) {
  const foundStudent = repository.find(
    (student) => student.class === className
  );
  return foundStudent;
}

function deleteStudentByCode(code) {
  const index = repository.findIndex((student) => student.code === code);
  repository.splice(index, 1);
  return repository;
}

createStudentRepository({
  name: "Jubileu",
  class: "Turma 3",
  document: "123.123.123-00",
  status: "matriculado",
});

createStudentRepository({
  name: "Ciclano",
  class: "Turma 3",
  document: "123.123.123-00",
  status: "matriculado",
});

updateStudentRepository(2, {
  name: "Fulano",
  
  document: "123.123.123-00",
  status: "pendente",
});

// console.log(repository);

console.log(repository);
