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

    @Column({ nullable: true, unique: true })
    url!: string;

    @Column({ nullable: true, length: 256 })
    tags!: string;

    @Column({ nullable: true })
    fileUrl!: string;

    @Column({ nullable: true })
    base64Image!: string;

    @Column({ nullable: false })
    queueId!: string;

    @ManyToOne((): ObjectType<QueueEntity> => QueueEntity, ({ images }) => images, { nullable: true })
    @JoinColumn()
    queue: QueueEntity;

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;
}
