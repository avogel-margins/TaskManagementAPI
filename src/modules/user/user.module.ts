import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { User } from "./entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./services/user.service";
import { UserRepository } from "./services/user.repository";
import { AbstractUserRepository } from "./abstract/user.abstract.repository";
import { AbstractUserService } from "./abstract/user.abstract.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    {
      provide: AbstractUserRepository,
      useExisting: UserRepository,
    },
    {
      provide: AbstractUserService,
      useExisting: UserService,
    },
  ],
  exports: [AbstractUserService, AbstractUserRepository],
})
export class UserModule {}
