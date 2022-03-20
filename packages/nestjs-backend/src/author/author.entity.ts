import { HistoryEntity } from "src/history/history.entity";
import { QueueEntity } from "src/queue/queue.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ nullable: true })
    name!: string;

    @CreateDateColumn()
    created!: Date;

    @Column({ nullable: true })
    accessToken!: string;

    @Column({ nullable: true })
    refreshToken!: string;

    @OneToMany(() => QueueEntity, ({ author }) => author)
    queue!: QueueEntity;

    // @OneToMany(() => HistoryEntity, ({ author }) => author)
    // history!: HistoryEntity;

    @UpdateDateColumn()
    updated!: Date;
}
