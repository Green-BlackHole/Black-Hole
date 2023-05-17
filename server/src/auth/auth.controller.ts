import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { CreateOTPDto } from './dto/createOTP.dto';
import { CheckOTPDto } from './dto/checkOTP.dto';
import { CurrentUser } from './current-user.decorator';
import { Secured } from './secured.decorator';
import { log } from 'console';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signin(@Body() signinDto: SigninDto) {
    console.log(signinDto);

    return this.authService.signin(signinDto);
  }

  @Secured()
  @Get('currentUser')
  currentUser(@CurrentUser() user) {
    return user;
  }

  @Post('/signup')
  signup(@Body() signupDto: SignupDto) {
    console.log(signupDto);

    return this.authService.signup(signupDto);
  }
  @Post('/otp/signin')
  siginOTP(@Body() createOTPDto: CreateOTPDto) {
    console.log(createOTPDto);

    return this.authService.createOTP(createOTPDto);
  }

  @Post('/otp/signin/verify')
  siginOTPConfirm(@Body() checkOTPDto: CheckOTPDto) {
    return this.authService.verifyOTP(checkOTPDto);
  }
}
