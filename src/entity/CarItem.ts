import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class CarItem{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    reg_plate: string;

    @Column()
    active: boolean;

    @Column()
    image: string;

    @CreateDateColumn()
    added: Date;

}