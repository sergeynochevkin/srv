import { UserService } from './users.service';
import { Controller, Get, Logger, Query } from '@nestjs/common';
import { UsersResponseDto } from './users.response.dto';
import { GetUsersEntity } from './get_users.entity';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(@Query() query: GetUsersEntity) {
    this.logger.log('Get all users');
    const result = await this.userService.findAll(query);

    return { users: result[0].map((user) => UsersResponseDto.fromUsersEntity(user)), total: result[1] };

  }
}
