import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import * as dotenv from 'dotenv';
import { MulterModule } from '@nestjs/platform-express';
import { UsersModule } from './users/users.module';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    ProductsModule,
    MulterModule.register({ dest: './upload' }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
