import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity({ name: 'expert' })
export class Expert {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  surname: string;

  @Column({ length: 255 })
  location: string;

  @Column({ length: 255 })
  role: string;

  @Column({ length: 255 })
  hospital: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  // Relations
  @ManyToMany(() => User, (user) => user.experts)
  users: User[];
}
