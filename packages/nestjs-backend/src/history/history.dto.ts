import { FilterableField, IDField, Relation } from "@nestjs-query/query-graphql";
import { Field, GraphQLISODateTime, ID, ObjectType } from "@nestjs/graphql";
import { AuthorDto } from "src/author/author.dto";

@ObjectType("History")
@Relation("Author", () => AuthorDto, { disableRemove: true })
export class HistoryDto {
    @IDField(() => ID)
    id!: number;

    @FilterableField()
    url!: string;

    @FilterableField({ nullable: true })
    tags!: string;

    @Field({ nullable: true })
    imgBase64!: string;

    @FilterableField({ nullable: false })
    authorId!: string;

    @FilterableField({ nullable: false })
    vkPostId!: string;

    @Field(() => GraphQLISODateTime)
    created!: Date;

    @Field(() => GraphQLISODateTime)
    updated!: Date;
}
