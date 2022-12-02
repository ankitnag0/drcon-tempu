/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClinicWhereInput } from "./ClinicWhereInput";
import { Type } from "class-transformer";
import { ClinicOrderByInput } from "./ClinicOrderByInput";

@ArgsType()
class ClinicFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClinicWhereInput,
  })
  @Field(() => ClinicWhereInput, { nullable: true })
  @Type(() => ClinicWhereInput)
  where?: ClinicWhereInput;

  @ApiProperty({
    required: false,
    type: [ClinicOrderByInput],
  })
  @Field(() => [ClinicOrderByInput], { nullable: true })
  @Type(() => ClinicOrderByInput)
  orderBy?: Array<ClinicOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClinicFindManyArgs };
