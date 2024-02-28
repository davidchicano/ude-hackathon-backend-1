import { Injectable, NotFoundException } from '@nestjs/common'; // Assume similar DTOs for Sensor
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensor } from './entities/sensor.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(Sensor)
    private sensorRepository: Repository<Sensor>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(
    userId: User['id'],
    createSensorDto: CreateSensorDto,
  ): Promise<Sensor> {
    const user = await this.userRepository.findOneBy({
      id: userId,
    });
    if (!user) {
      throw new NotFoundException(`User with ID "${userId}" not found`);
    }

    const newSensor = this.sensorRepository.create(createSensorDto);
    newSensor.user = user; // Associate the sensor with the user
    return this.sensorRepository.save(newSensor);
  }

  async findAll(): Promise<Sensor[]> {
    return this.sensorRepository.find();
  }

  async findOne(id: Sensor['id']): Promise<Sensor> {
    const sensor = await this.sensorRepository.findOneBy({ id });
    if (!sensor) {
      throw new NotFoundException(`Sensor with ID "${id}" not found`);
    }
    return sensor;
  }

  async findOneInfo(id: Sensor['id']): Promise<any> {
    // Assuming there's a method to fetch sensor info
    const sensor = await this.findOne(id); // Reuse the findOne method
    // Transform or fetch additional info about the sensor as needed
    return { ...sensor, extraInfo: 'This is extra info' };
  }

  async findOneData(id: Sensor['id']): Promise<any> {
    // Assuming there's a method to fetch sensor data
    const sensor = await this.findOne(id); // Reuse the findOne method
    // Transform or fetch data specific to the sensor as needed
    return { ...sensor, data: 'This is sensor data' };
  }
}
