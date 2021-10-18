import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository : Repository<Person>)
  {}
  
  async create(createPersonDto: CreatePersonDto) { 
      
        const entidad = this.personRepository.create(createPersonDto as any);
               
        const data = await this.personRepository.save(entidad);
    
        return {
          code : "OK",
          message : "Consulta realizada con éxito",
          data
        };
  }
  async findAll() {
    const data = await this.personRepository.find();

    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };
  }

  async findOne(id: number) {
    const data = await this.personRepository.findOne(id);

    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const person = await this.personRepository.findOne(id);
    if (!person) throw new NotFoundException("Libro inexistente");
    const editedperson = Object.assign(person, updatePersonDto)
    const data = await this.personRepository.save(editedperson);
    return {
      code : "OK",
      message : "Consulta realizada con éxito",
      data
    };  
  }

  async remove(id: number) {
    const person = await this.personRepository.findOne(id);
      if (!person) throw new NotFoundException("Persona inexistente");
      const data = this.personRepository.remove(person);
      return {
        code : "OK",
        message : "Consulta realizada con éxito",
        data
      };
  }
}
    function person(person: any) {
      throw new Error('Function not implemented.');
    }

