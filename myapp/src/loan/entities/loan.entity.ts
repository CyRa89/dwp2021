import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Author } from 'src/author/entities/author.entity';
import { Book } from 'src/book/entities/book.entity';
import { Person } from 'src/person/entities/person.entity';


@Entity("loan")
export class Loan  {
    @PrimaryGeneratedColumn()
    idloan: number;

    @ManyToOne(type => Person)
    @Column("person_id")
    person : Person;

    @ManyToOne(type => Book)
    @Column("book_id")
    book: Book; 

    @Column()
    load_date : Date;
   
    @Column()
    return_date : Date;

}
