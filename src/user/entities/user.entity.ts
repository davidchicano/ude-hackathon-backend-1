import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Sensor } from 'src/sensor/entities/sensor.entity';
import { Family } from 'src/family/entities/family.entity';
import { Expert } from 'src/expert/entities/expert.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  surname: string;

  @Column('text')
  password: string;

  @Column({ length: 255 })
  location: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  // Relations
  @OneToMany(() => Sensor, (sensor) => sensor.user)
  sensors: Sensor[];

  @ManyToOne(() => Family, (family) => family.users, { onDelete: 'CASCADE' })
  family: Family;

  @ManyToMany(() => Expert, (expert) => expert.users)
  @JoinTable()
  experts: Expert[];
}
