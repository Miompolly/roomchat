import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id?: number;
  @Field()
  fullname: string;
  @Field()
  email?: string;
  @Field({ nullable: true })
  avatarUrl?: string;
  @Field()
  password?: string;
  @Field({ nullable: true })
  createdAt?: Date;
  @Field({ nullable: true })
  updateAt?: Date;
}
