const repository = [];
let idCount = 1;

// Crie uma funçao que adiciona um carro(Object) ao repository e retorna o objeto salvado
// Parametros: modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function createCar(modelo, cor, ano) {
  repository.push({
    Modelo: modelo,
    Cor: cor,
    Ano: ano,
    Id: idCount++,
  });
}

const carro1 = createCar("stepway", "cinza", 2019);
const carro2 = createCar("uno com escada", "prata", 2010);

// Crie uma funçao que recebe um id por parametro e retorna o objeto referente
// Parametros: id(string)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function findCarById(id) {
  const foundCar = repository.find((car) => car.Id === id);
  return foundCar;
}
console.log(findCarById(2))
// Crie uma funçao que retorna todos os carros
// Returno(Array): (id(string), modelo(string), cor(string), ano(number), createdAt(Date))[]
function findAllCars() {
  return repository
}

// Crie uma funçao que atualiza um carro(Object) no repository e retorna o objeto atualizado
// Parametros: id(string), modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function updateCarById(id, modelo, cor, ano) {
  repository.map((item) => {
    if (item.Id === id) {
      item.Modelo = modelo;
      item.Cor = cor;
      item.Ano = ano;
    }
  });
}
updateCarById(2, "Sandero", "Preto", 2015);

// Crie uma funçao que remove um carro do repositorio
// Parametros: id(string)
function deleteCarById(id) {
  const index = repository.findIndex((item) => item.Id === id)
  repository.splice(index, 1);
}
