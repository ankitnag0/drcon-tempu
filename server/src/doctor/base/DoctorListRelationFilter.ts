/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DoctorWhereInput } from "./DoctorWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DoctorListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DoctorWhereInput,
  })
  @ValidateNested()
  @Type(() => DoctorWhereInput)
  @IsOptional()
  @Field(() => DoctorWhereInput, {
    nullable: true,
  })
  every?: DoctorWhereInput;

  @ApiProperty({
    required: false,
    type: () => DoctorWhereInput,
  })
  @ValidateNested()
  @Type(() => DoctorWhereInput)
  @IsOptional()
  @Field(() => DoctorWhereInput, {
    nullable: true,
  })
  some?: DoctorWhereInput;

  @ApiProperty({
    required: false,
    type: () => DoctorWhereInput,
  })
  @ValidateNested()
  @Type(() => DoctorWhereInput)
  @IsOptional()
  @Field(() => DoctorWhereInput, {
    nullable: true,
  })
  none?: DoctorWhereInput;
}
export { DoctorListRelationFilter };
