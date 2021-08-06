import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import Book from "src/model/book";

@Injectable()
export default class BookService {

    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book 
    ) {}

    async getAll(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    async getById(id: number): Promise<Book> {
        return this.bookModel.findByPk(id);
    }

    async add(book: Book) {
        this.bookModel.create(book);
    }

    async update(book: Book): Promise<[number, Book[]]> {
        return this.bookModel.update(book, {
            where: { id: book.id }
        });
    }

    async delete(id: number) {
        const book: Book = await this.getById(id);
        book.destroy;
    }

}