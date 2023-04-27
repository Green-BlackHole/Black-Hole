import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import env from '../env';
import { MongooseModule } from '@nestjs/mongoose';
console.log('JWT', env.JWT_SECRET, env.MONGO_URL);
@Module({
  imports: [
    MongooseModule.forRoot(env.MONGO_URL),
    UsersModule,
    AuthModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: env.JWT_SECRET,
      signOptions: { expiresIn: '4h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
