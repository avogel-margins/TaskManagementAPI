import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { TypeOrmConfig } from '../config/env.validation';

@Injectable()
export class TypeOrmOptions implements TypeOrmOptionsFactory {
  private RETRY_ATTEMPTS: number;
  private RETRY_DELAY: number;
  private POOL_SIZE: number;
  private CONNECTION_TIMEOUT_MS: number;
  private QUERY_TIMEOUT: number;
  private STATEMENT_TIMEOUT: number;

  constructor(private readonly config: TypeOrmConfig) {
    this.RETRY_ATTEMPTS = 10;
    this.RETRY_DELAY = 2000;
    this.POOL_SIZE = 50;
    this.CONNECTION_TIMEOUT_MS = 2000;
    this.QUERY_TIMEOUT = 10000;
    this.STATEMENT_TIMEOUT = 10000;
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.HOST,
      port: this.config.PORT,
      username: this.config.USERNAME,
      password: this.config.PASSWORD,
      database: this.config.DBNAME,
      autoLoadEntities: true,
      retryAttempts: this.RETRY_ATTEMPTS,
      retryDelay: this.RETRY_DELAY,
      synchronize: true, //false
      migrationsRun: false, //true
      logging: true,
      extra: {
        poolSize: this.POOL_SIZE,
        connectionTimeoutMillis: this.CONNECTION_TIMEOUT_MS,
        query_timeout: this.QUERY_TIMEOUT,
        statement_timeout: this.STATEMENT_TIMEOUT,
      },
      //migrationsTransactionMode: 'each',
      //migrations: [__dirname + '/dist/db/migrations/*{.ts,.js}'],
      //migrationsTableName: 'migration_table',
    };
  }
}
