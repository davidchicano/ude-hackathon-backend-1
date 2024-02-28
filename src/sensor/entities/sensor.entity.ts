import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity({ name: 'sensor' })
export class Sensor {
  @PrimaryColumn()
  phoneNumber: string;

  @Column({ length: 255 })
  type: string;

  @Column({ type: 'jsonb', nullable: true })
  data: any;

  @Column({ length: 255, nullable: true })
  lastLocation: string;

  @Column({ type: 'timestamp with time zone', nullable: true })
  lastUpdate: Date;

  @Column('boolean', { default: false })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  // Relations
  @ManyToOne(() => User, (user) => user.sensors, { onDelete: 'CASCADE' })
  user: User;
}
