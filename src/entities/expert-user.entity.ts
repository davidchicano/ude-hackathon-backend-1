import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Expert } from 'src/expert/entities/expert.entity';

@Entity({ name: 'expert_user' })
export class ExpertUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  // Relations
  @ManyToOne(() => User, (user) => user.expertUsers, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Expert, (expert) => expert.expertUsers, {
    onDelete: 'CASCADE',
  })
  expert: Expert;
}
