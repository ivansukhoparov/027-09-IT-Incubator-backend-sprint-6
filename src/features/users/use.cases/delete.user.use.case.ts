import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UsersRepository } from '../infrastructure/users.repository';

export class DeleteUserCommand {
  constructor(public userId: string) {}
}

@CommandHandler(DeleteUserCommand)
export class DeleteUserUseCase implements ICommandHandler<DeleteUserCommand> {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(command: DeleteUserCommand) {
    await this.usersRepository.deleteUser(command.userId);
  }
}
