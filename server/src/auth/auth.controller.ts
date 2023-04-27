import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signin(@Body() signinDto: SigninDto) {
    console.log(signinDto);

    return this.authService.signin(signinDto);
  }

  @Post('/signup')
  signup(@Body() signupDto: SignupDto) {
    console.log(signupDto);

    return this.authService.signup(signupDto);
  }
}
