import { Column } from "../ydb/decorators/column.decorator";
import { Entity } from "../ydb/decorators/entity.decorator";
import { PrimaryColumn } from "../ydb/decorators/primary-column.decorator";

@Entity()
export class ImagesEntity {
    @PrimaryColumn()
    id!: string;

    @Column()
    url!: string;

    @Column()
    tags!: string;

    @Column()
    fileUrl!: string;

    @Column()
    base64Image!: string;

    @Column()
    title!: string;

    @Column()
    queueId!: number;

    // queue: QueueEntity;

    // created!: Date;
    // updated!: Date;
}
