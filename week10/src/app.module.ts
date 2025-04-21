import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // update this
      password: '',     // update this
      database: 'ecommerce',
      entities: [User],
      synchronize: true, // for dev only
    }),
    AuthModule,
  ],
})
export class AppModule {}
