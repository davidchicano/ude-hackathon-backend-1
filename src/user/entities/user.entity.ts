import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Sensor } from 'src/sensor/entities/sensor.entity';
import { UserFamily } from 'src/entities/user-family.entity';
import { ExpertUser } from 'src/entities/expert-user.entity';

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

  @OneToMany(() => UserFamily, (userFamily) => userFamily.user)
  userFamilies: UserFamily[];

  @OneToMany(() => ExpertUser, (expertUser) => expertUser.user)
  expertUsers: ExpertUser[];
}
