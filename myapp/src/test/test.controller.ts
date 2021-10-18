import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, Request } from '@nestjs/common';
import { Peticion } from './dto/peticion.dto';
import { TestService } from './test.service';

@Controller('MyController')
export class TestController {

  constructor(private readonly myService : TestService){}

@Get()
findAll(){
  return this.myService.findAll();
}

@Get(":id")
findOne(@Param("id", ParseIntPipe) id : number){
  return this.myService.findOne(id);
}

@Post()
createOne(@Body() peticion : Peticion){
  return this.myService.create(peticion);
}

@Put(":id")
EditOne(
  @Param("id", ParseIntPipe) id : number,
  @Body() peticion : Peticion){
  return this.myService.edit(id, peticion);
}

@Delete(":id")
deleteOne(  @Param("id", ParseIntPipe) id : number){
  return this.myService.delete(id);
}
/*    @Get(':id/:usr')
    getHello(@Param('id',ParseIntPipe) myid : number, @Param('usr') usr): string {
        return "hola GET: "+myid + " - "+usr;
      }

      @Post()
      getHello2(@Req() request: Request): string {
        console.log(request.body);
          return "hola POST: "+request.body["id"]+ " - "+request.body["usr"];
        }
        //6lcdnw4
        //DTO
        @Post('directo')
        getHello3(@Body() peticion : Peticion): string {
          
            return "hola POST: "+peticion.id+ " - "+peticion.usr;
          } */
}
