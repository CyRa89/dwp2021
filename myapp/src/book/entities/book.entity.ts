import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("books")
export class Book {
    @PrimaryGeneratedColumn()
    id : number;
	@Column()
    name : string;
    @Column()
    publish_date : Date;
    @Column()
    category : string;
    @Column()
    publisher : string;
    @Column()
    sell_price : number;
    @Column()
    isbn : string;
    @Column()
    stock : number;
    @Column()
    edition : string;

}
