/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Clinic } from "../../clinic/base/Clinic";
import { ValidateNested, IsDate, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Doctor } from "../../doctor/base/Doctor";
@ObjectType()
class Schedule {
  @ApiProperty({
    required: true,
    type: () => Clinic,
  })
  @ValidateNested()
  @Type(() => Clinic)
  clinic?: Clinic;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateTime!: Date;

  @ApiProperty({
    required: true,
    type: () => Doctor,
  })
  @ValidateNested()
  @Type(() => Doctor)
  doctor?: Doctor;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  duration!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Schedule };
