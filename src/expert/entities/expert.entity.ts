import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { ExpertUser } from 'src/relations/entities/expert-user.entity';

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
  @OneToMany(() => ExpertUser, (expertUser) => expertUser.expert)
  expertUsers: ExpertUser[];
}
