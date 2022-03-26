import { FilterableField, IDField, Relation } from "@nestjs-query/query-graphql";
import { Field, GraphQLISODateTime, ID, ObjectType } from "@nestjs/graphql";
import { QueueDto } from "src/queue/queue.dto";

@ObjectType("Author")
@Relation("queue", () => QueueDto, { disableRemove: true })
export class AuthorDto {
    @IDField(() => ID)
    id!: number;

    @FilterableField()
    name!: string;

    @FilterableField({ nullable: true })
    authorId!: string;

    @FilterableField({ nullable: true })
    vkID!: string;

    @Field()
    accessToken!: string;

    @Field()
    refreshToken!: string;

    @Field(() => GraphQLISODateTime)
    created!: Date;

    @Field(() => GraphQLISODateTime)
    updated!: Date;
}
