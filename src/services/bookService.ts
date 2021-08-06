import Book from "src/model/book";

export default class BookService {

    private books: Book[] = [];    

    getAll() {
        return this.books;
    }

    getById(id: number) {
        return this.books[0];
    }

    add(book: Book) {
        this.books.push(book);
    }

    update(book: Book) {
        return book;
    }

    delete(id: number) {
        this.books.pop();
    }

}