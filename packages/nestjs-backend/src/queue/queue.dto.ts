import { FilterableField, FilterableOffsetConnection, IDField, Relation } from "@nestjs-query/query-graphql";
import { Field, GraphQLISODateTime, ID, ObjectType } from "@nestjs/graphql";
import { AuthorDto } from "src/author/author.dto";
import { ImagesDto } from "src/images/images.dto";

@ObjectType("Queue")
@FilterableOffsetConnection("Images", () => ImagesDto, { disableRemove: true })
@Relation("Author", () => AuthorDto, { disableRemove: true })
export class QueueDto {
    @IDField(() => ID)
    id!: number;

    @FilterableField()
    published!: boolean;

    @FilterableField()
    authorId!: string;

    @Field(() => GraphQLISODateTime)
    created!: Date;

    @Field(() => GraphQLISODateTime)
    updated!: Date;
}
