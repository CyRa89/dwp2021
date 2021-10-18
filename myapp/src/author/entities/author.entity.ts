import { AuthorBook } from 'src/author-book/entities/author-book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("authors")
export class Author {
    @PrimaryGeneratedColumn()
    idauthors: number;

    @Column()
    name: string;

    @Column({ default: '' })
    origen?: string;

    @OneToMany(type => AuthorBook, relacion => relacion.author)
    book_author: AuthorBook[] 
}