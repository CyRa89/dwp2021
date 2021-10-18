import { Injectable } from '@nestjs/common';
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

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
    function person(person: any) {
      throw new Error('Function not implemented.');
    }

