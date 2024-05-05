//INFO: Interface Segregation Principle

interface User {
  borrowBook(bookId: string): void;
  returnBook(bookId: string): void;
  renewMembership(): void;
  accessLibraryResources(): void;
}

export class Reader implements User {
  borrowBook(bookId: string) {
    // logic to borrow a book
  }

  returnBook(bookId: string) {
    // logic to return a book
  }

  renewMembership() {
    // logic to renew membership
  }

  accessLibraryResources() {
    // logic to access library resources
  }
}

export class Librarian implements User {
  borrowBook(bookId: string) {
    // Librarians can't borrow books
  }

  returnBook(bookId: string) {
    // logic to return a book
  }

  renewMembership() {
    // Librarians can't renew memberships
  }

  accessLibraryResources() {
    // logic to access library resources
  }
}

export class Administrator implements User {
  borrowBook(bookId: string) {
    // Admins can't borrow books
  }

  returnBook(bookId: string) {
    // Admins can't return books
  }

  renewMembership() {
    // Admins can't renew memberships
  }

  accessLibraryResources() {
    // logic to access library resources
  }
}
