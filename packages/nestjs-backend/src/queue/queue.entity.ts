import { AuthorEntity } from "src/author/author.entity";
import { ImagesEntity } from "src/images/images.entity";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class QueueEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ default: false })
    published!: boolean;

    @Column({ nullable: false })
    authorId!: string;

    @ManyToOne(() => AuthorEntity, ({ queue }) => queue)
    author!: AuthorEntity;

    @OneToMany(() => ImagesEntity, ({ queue }) => queue)
    images!: ImagesEntity[];

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}
