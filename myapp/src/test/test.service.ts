import { Injectable } from '@nestjs/common';
import { Peticion } from './dto/peticion.dto';

@Injectable()
export class TestService {

    create(dto : Peticion){
        return "creando";
    }

    edit(id, dto:Peticion){
        return "Editando: "+id;
    }

    delete(id){
        return "Eliminando "+id;
    }

    findOne(id){
        return "find one "+ id;
    }

    findAll(){
        return "find all";
    }
}
