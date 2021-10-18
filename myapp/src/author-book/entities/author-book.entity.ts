import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Author } from 'src/author/entities/author.entity';
import { Book } from 'src/book/entities/book.entity';

@Entity("book_author")
export class AuthorBook {
    @PrimaryGeneratedColumn()
    idbook_author: number;

    @ManyToOne(type => Author)
    @Column("author_id")
    author: Author;

    @ManyToOne(type => Book)
    @Column("book_id")
    book: Book; 

}