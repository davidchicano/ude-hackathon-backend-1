import { Injectable, NotFoundException } from '@nestjs/common'; // Assume similar DTOs for Sensor
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Family } from './entities/family.entity';
import { CreateFamilyDto } from './dto/create-family.dto';

@Injectable()
export class FamilyService {
  constructor(
    @InjectRepository(Family)
    private familyRepository: Repository<Family>,
  ) {}

  async create(createFamilyDto: CreateFamilyDto): Promise<Family> {
    const newFamily = this.familyRepository.create(createFamilyDto);
    return this.familyRepository.save(newFamily);
  }

  async findAll(): Promise<Family[]> {
    return this.familyRepository.find();
  }

  async findOne(id: Family['id']): Promise<Family> {
    const family = await this.familyRepository.findOneBy({ id });
    if (!family) {
      throw new NotFoundException(`Family with ID "${id}" not found`);
    }
    return family;
  }
}
