import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class UserTokens {
  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @PrimaryColumn()
  userId: string;

  @Column()
  refreshTokenMeta: string;

  @Column()
  recoveryTokenMeta: string;
}
