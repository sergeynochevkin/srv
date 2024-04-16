import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
import { GetUsersEntity } from './get_users.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(UsersEntity)
    private usersRepo: Repository<UsersEntity>,
  ) {}

  // get list of all users
  async findAll(query: GetUsersEntity): Promise<[UsersEntity[],number]> {
    return await this.usersRepo.findAndCount({ take: query.take, skip: query.skip });
  }
}
