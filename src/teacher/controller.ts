import { JsonController, Post, BadRequestError,  Body, Authorized } from 'routing-controllers'
import Teacher from './entity';
import { IsString } from 'class-validator'
import { sign } from '../jwt'

class AuthenticatePayload {
    @IsString()
    email: string

    @IsString()
    password: string
}


@JsonController()
export default class TeacherController {

    @Post('/teachers')
    async authenticate(
        @Body() { email, password }: AuthenticatePayload
    ) {
        const teacher = await Teacher.findOne({ where: { email } })

        if (!teacher) throw new BadRequestError('A user with this name does not exist')

        if (!await teacher.checkPassword(password)) throw new BadRequestError('The password is not correct')

        const jwt = sign({
            id: teacher.id!
        })
        return { jwt }

    }
}
