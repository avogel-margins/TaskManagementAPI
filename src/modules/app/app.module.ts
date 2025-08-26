import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dotenvLoader, TypedConfigModule } from 'nest-typed-config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CategoryModule } from '../category/category.module';
import { TaskModule } from '../task/task.module';
import { UserModule } from '../user/user.module';
import { TypeOrmOptions } from '../../common/providers/typeorm.provider';
import { RootConfig, TypeOrmConfig } from 'src/common/config/env.validation';

@Module({
  imports: [
    TypedConfigModule.forRoot({
      schema: RootConfig,
      load: dotenvLoader({ separator: '_' }),
    }),

    TypeOrmModule.forRootAsync({
      imports: [TypedConfigModule],
      inject: [TypeOrmConfig],
      useClass: TypeOrmOptions,
    }),

    CategoryModule,
    TaskModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, TypeOrmOptions],
})
export class AppModule {}
