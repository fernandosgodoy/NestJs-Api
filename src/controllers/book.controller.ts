import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Book from 'src/model/book';
import BookService from 'src/services/bookService';

@Controller()
export default class BookController {

    constructor(private bookService: BookService) {
    }

    @Get()
    public ListAll(): Book[] {
        return this.bookService.getAll();
    }

    @Get(':id')
    public GetSingle(@Param() params): Book {
        return this.bookService.getById(params.id);
    }
    
    @Post()
    public Create(book: Book) {
        this.bookService.add(book);
    }

    @Put()
    public Update(book: Book) {
        this.bookService.update(book);
    }

    @Delete(':id')
    public Remove(@Param() params) {
        this.bookService.delete(params.id);
    }

}