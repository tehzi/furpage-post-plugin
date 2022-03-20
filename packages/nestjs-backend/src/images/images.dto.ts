import { FilterableField, FilterableRelation, IDField } from "@nestjs-query/query-graphql";
import { Field, GraphQLISODateTime, ID, ObjectType } from "@nestjs/graphql";
import { QueueDto } from "src/queue/queue.dto";

@ObjectType("Images")
@FilterableRelation("queue", () => QueueDto, { disableRemove: true })
export class ImagesDto {
    @IDField(() => ID)
    id!: number;

    @FilterableField()
    url!: string;

    @FilterableField()
    tags!: string;

    @FilterableField()
    fileUrl!: string;

    @Field()
    base64Image!: string;

    @FilterableField({ nullable: false })
    queueId!: string;

    @Field(() => GraphQLISODateTime)
    created!: Date;

    @Field(() => GraphQLISODateTime)
    updated!: Date;
}
