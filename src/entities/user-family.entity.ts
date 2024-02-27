import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Family } from 'src/entities/family.entity';

@Entity({ name: 'user_family' })
export class UserFamily {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  // Relations
  @ManyToOne(() => User, (user) => user.userFamilies, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Family, (family) => family.id, {
    onDelete: 'CASCADE',
  })
  family: Family;
}
