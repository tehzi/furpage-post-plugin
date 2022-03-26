import { QueueEntity } from "src/queue/queue.entity";
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    ObjectType,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class ImagesEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ nullable: true })
    url!: string;

    @Column("text", { nullable: true })
    tags!: string;

    @Column({ nullable: true, unique: true })
    fileUrl!: string;

    @Column({ nullable: true })
    base64Image!: string;

    @Column({ nullable: true })
    title!: string;

    @Column({ nullable: false })
    queueId!: string;

    @ManyToOne((): ObjectType<QueueEntity> => QueueEntity, ({ images }) => images, {
        nullable: true,
        onDelete: "CASCADE",
    })
    @JoinColumn()
    queue: QueueEntity;

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}
