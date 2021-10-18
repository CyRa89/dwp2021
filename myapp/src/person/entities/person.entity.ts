import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 

@Entity("persons")
export class Person {
    @PrimaryGeneratedColumn()
    idpersons : number;
	@Column()
    first_name : string;
    @Column()
    last_name : string;
    @Column()
    email : string;
    @Column()
    address : string;
    @Column()
    phone : number;
  
}