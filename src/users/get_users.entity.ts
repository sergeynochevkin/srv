import { IsNotEmpty, IsNumber, IsNumberString, IsOptional } from 'class-validator';

export class GetUsersEntity {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  readonly skip: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  readonly take: number;
}
