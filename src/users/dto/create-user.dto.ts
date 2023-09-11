import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    /**
     * Nome do usuário
     * @example João da Silva
     */
    name?: string;

    @ApiProperty({
        description: 'Email do usuário',
        example: 'joao@gmail.com',
    })
    email: string;

    @ApiProperty({
        description: 'Senha do usuário',
        example: 'joaodasilva@321asd',
    })
    password: string;

    @ApiProperty({
        description: 'Descrição sobre o usuário',
        example: 'João desenvolvedor de sistema',
        required: false,
    })
    descrition: string;
}
