import { AuthorEntity } from "src/author/author.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class HistoryEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ nullable: true, unique: true })
    url!: string;

    @Column({ nullable: true })
    tags!: string;

    @Column({ nullable: true })
    imgBase64!: string;

    @Column({ nullable: false })
    authorId!: string;

    @ManyToOne(() => AuthorEntity, ({ queue }) => queue)
    author!: AuthorEntity;

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}
