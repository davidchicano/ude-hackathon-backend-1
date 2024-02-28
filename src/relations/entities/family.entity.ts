import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'family' })
export class Family {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255, unique: true })
  name: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  // Relations
  @OneToMany(() => User, (user) => user.family)
  users: User[];
}
