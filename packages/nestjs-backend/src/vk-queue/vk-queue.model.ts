import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class VkQueue {
    @Field({ nullable: true })
    link!: string;

    @Field(() => Int, { nullable: true })
    date!: number;
}
