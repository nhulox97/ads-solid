// INFO: Dependency Inversion Principle

class Book {}

class Database {
  saveBook(book: Book): void {
    // save book to database
  }

  getBook(bookId: string): Book {
    const book = new Book();
    return book;
  }
}

class Library {
  private database: Database;

  constructor() {
    this.database = new Database();
  }

  addBook(book: Book): void {
    this.database.saveBook(book);
  }

  findBook(bookId: string): Book {
    return this.database.getBook(bookId);
  }
}
