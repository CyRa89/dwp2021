import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly AuthorRepository : Repository<Author>)
  {}
  async create(createAuthorDto: CreateAuthorDto) {
     const entidad = this.AuthorRepository.create(createAuthorDto as any);
  
      //const data  = await this.AuthorRepository.insert(entidad)
  
      const data = await this.AuthorRepository.save(entidad);
  
      return {
        code : "OK",
        message : "Consulta realizada con éxito",
        data
    };
  } 
  

  async findAll() {
    const data = await this.AuthorRepository.find();

    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };
  }

  
  async findOne(id: number) {
    const data = await this.AuthorRepository.findOne(id);

    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.AuthorRepository.findOne(id);
    if (!author) throw new NotFoundException("Autor existente");
    const editedauthor = Object.assign(author, updateAuthorDto)
    const data = await this.AuthorRepository.save(editedauthor);
    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };  
  }

  async remove(id: number) {
    const author = await this.AuthorRepository.findOne(id);
      if (!author) throw new NotFoundException("Autor inexistente");
      const data = this.AuthorRepository.remove(author);
      return {
        code : "OK",
        message : "Consulta realizada con éxito",
        data
      };
  }
}
