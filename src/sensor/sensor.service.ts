import { Injectable, NotFoundException } from '@nestjs/common'; // Assume similar DTOs for Sensor
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensor } from './entities/sensor.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { HttpService } from '@nestjs/axios';
import RetrievalResponse from './types/retrieval-response.type';

@Injectable()
export class SensorService {
  constructor(
    @InjectRepository(Sensor)
    private sensorRepository: Repository<Sensor>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly httpService: HttpService,
  ) {}

  async create(
    userId: User['id'],
    createSensorDto: CreateSensorDto,
  ): Promise<Sensor> {
    console.log();

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

  async findOne(id: Sensor['phoneNumber']): Promise<Sensor> {
    const sensor = await this.sensorRepository.findOneBy({ phoneNumber: id });
    if (!sensor) {
      throw new NotFoundException(`Sensor with ID "${id}" not found`);
    }

    return sensor;
  }

  async findOneInfo(id: Sensor['phoneNumber']): Promise<any> {
    // Assuming there's a method to fetch sensor info
    const sensor = await this.findOne(id); // Reuse the findOne method
    // Transform or fetch additional info about the sensor as needed

    const options = {
      method: 'POST',
      url: 'https://location-retrieval.p-eu.rapidapi.com/retrieve',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'e809606af6msh44fac2dcabcd9d3p1b1015jsn32e30715f609',
        'X-RapidAPI-Host': 'location-retrieval.nokia.rapidapi.com',
      },
      data: {
        device: {
          phoneNumber: id,
        },
        maxAge: 60,
      },
    };

    this.httpService
      .axiosRef(options)
      .then((response: { data: RetrievalResponse }) => {
        sensor.data = response.data;
        this.sensorRepository.save(sensor);
        return response.data;
      })
      .catch((error) => {
        console.log('Received Error');
        throw error;
      });

    return sensor.data;
  }

  async findOneData(id: Sensor['phoneNumber']): Promise<any> {
    // Assuming there's a method to fetch sensor data
    const sensor = await this.findOne(id); // Reuse the findOne method

    return sensor.data;
  }
}
