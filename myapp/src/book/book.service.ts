import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository : Repository<Book>)
  {}

  async create(createBookDto: CreateBookDto) {
    const entidad = this.bookRepository.create(createBookDto as any);

    //const data  = await this.bookRepository.insert(entidad)

    const data = await this.bookRepository.save(entidad);

    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };
  }

  async findAll() {
    const data = await this.bookRepository.find();

    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };
  }

  async findOne(id: number) {
    const data = await this.bookRepository.findOne(id);

    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.bookRepository.findOne(id);
    if (!book) throw new NotFoundException("Libro inexistente");
    const editedbook = Object.assign(book, updateBookDto)
    const data = await this.bookRepository.save(editedbook);
    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };  
  }

    async remove(id: number) {
      const book = await this.bookRepository.findOne(id);
      if (!book) throw new NotFoundException("Libro inexistente");
      const data = this.bookRepository.remove(book);
      return {
        code : "OK",
        message : "Consulta realizada con éxito",
        data
      };
  }
}
