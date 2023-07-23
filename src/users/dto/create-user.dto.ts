import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Почта пользователя',
    nullable: false,
  })
  email: string;

  @ApiProperty({
    description: 'ФИО пользователя',
    nullable: false,
  })
  fullname: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    nullable: false,
  })
  password: string;
}
