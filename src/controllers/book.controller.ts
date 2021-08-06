import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Book from 'src/model/book';
import BookService from 'src/services/bookService';

@Controller()
export default class BookController {

    constructor(private bookService: BookService) {
    }

    @Get()
    async ListAll(): Promise<Book[]> {
        return await this.bookService.getAll();
    }

    @Get(':id')
    async GetSingle(@Param() params): Promise<Book> {
        return await this.bookService.getById(params.id);
    }
    
    @Post()
    async Create(book: Book) {
        this.bookService.add(book);
    }

    @Put()
    async Update(book: Book): Promise<[number, Book[]]>  {
        return await this.bookService.update(book);
    }

    @Delete(':id')
    async Remove(@Param() params) {
        await this.bookService.delete(params.id);
    }

}