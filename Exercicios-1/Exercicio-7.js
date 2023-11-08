// Deve ser possível cadastrar um livro, passando as informacoes: titulo, descricao, ano de lancamento, autor e categoria;
// Deve ser possível buscar um livro pelo titulo
// Deve ser possível buscar todos os livros de um determinado autor
// Deve ser possível atualizar as informacoes de um livro passando o seu id
// Deve ser possível deletar cada livro pelo id

let bookRepository = [];
let autorRepository = [];
let autorId = 0;
let bookId = 0;

class CreateDate {
  constructor() {
    this.createdAt = new Date();
  }
}

class Autor extends CreateDate {
  constructor(name) {
    super();
    this.nome = name;
    this.books = [];
    this.id = autorId++;
  }
}

class Book extends CreateDate {
  constructor(tittle, description, release, autorName, catg) {
    super();
    this.titulo = tittle;
    this.descrição = description;
    this.lançamento = release;
    this.autor = autorName;
    this.categoria = catg;
    this.id = bookId++;
  }
}

class Repository extends CreateDate {
  constructor(autorRepository, bookRepository) {
    super();
    this.autorRepository = autorRepository;
    this.bookRepository = bookRepository;
  }

  createAutor(name) {
    const autor = new Autor(name);
    return autor;
  }

  postAutor(name) {
    const createdAutor = createAutor(name);
    this.autorRepository.push(createdAutor);
  }

  createBook(tittle, description, release, autorName, catg) {
    const book = new Book(tittle, description, release, autorName, catg);
    const foundAutor = this.autorRepository.find(
      (element) => element.nome === autorName
    );
    if (!foundAutor) {
      const createdAutor = this.createAutor(autorName);
      createdAutor.books.push({ tittle: book.titulo, id: book.id });
      this.autorRepository.push(createdAutor);
      this.bookRepository.push(book);
      return this.autorRepository, this.bookRepository;
    }
    foundAutor.books.push({ tittle: book.titulo, id: book.id });
    this.bookRepository.push(book);
  }

  findBookByTittle(tittle) {
    const foundBook = this.bookRepository.find(
      (book) => book.tittle === tittle
    );
    if (!foundBook) {
      return "book not found";
    }
    return foundBook;
  }

  findBooksOfAnAutor(autorName) {
    const foundedBooks = this.bookRepository.filter(
      (book) => book.autor === autorName
    );
    return foundedBooks;
  }

  updateBook(id, data) {
    const foundedBook = this.bookRepository.find((book) => book.id === id);
    if (!foundedBook) {
      return "book not found";
    }
    Object.assign(foundedBook, data);
  }

  deleteBook(id) {
    const index = this.bookRepository.findIndex((book) => book.id === id);
    if (index === -1) {
      return "book not found";
    }
    this.bookRepository.splice(index, 1);
  }

  findAutorById(id) {
    const foundedAutor = this.autorRepository.find((autor) => autor.id === id);
    if (!foundedAutor) {
      return "autor not found";
    }
    return foundedAutor;
  }

  updateAutorById(id, data) {
    const foundedAutor = this.findAutorById(id);
    if (!foundedAutor) {
      return "autor not found";
    }
    Object.assign(foundedAutor, data);
  }

  deleteAutor(id) {
    const index = this.autorRepository.findIndex((autor) => autor.id === id);
    if (index === -1) {
      return "autor not found";
    }
    this.autorRepository[index].books.forEach((element) => {
      const bookindex = this.bookRepository.findIndex(
        (book) => book.id === element.id
      );
      if (bookindex) {
        this.bookRepository.splice(bookindex, 1);
      }
    });
    this.autorRepository.splice(index, 1);
  }
}

const dataBase = new Repository(autorRepository, bookRepository);

dataBase.createBook(
  "toaemtaooeamt",
  "aoemtaoetma",
  "139491349913",
  "Yago",
  "Naruto"
);
dataBase.createBook(
  "toaemtaooeamt",
  "aoemtaoetma",
  "139491349913",
  "carlos",
  "Naruto"
);
dataBase.createBook(
  "toaemtaooeamt",
  "aoemtaoetma",
  "139491349913",
  "jotinha",
  "Naruto"
);
dataBase.createBook(
  "toaemtaooeamt",
  "aoemtaoetma",
  "139491349913",
  "Yago",
  "Naruto"
);
dataBase.createBook(
  "toaemtaooeamt",
  "aoemtaoetma",
  "139491349913",
  "Yago",
  "Naruto"
);

console.log(dataBase.autorRepository[0]);
