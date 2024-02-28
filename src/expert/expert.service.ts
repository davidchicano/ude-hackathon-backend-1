import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExpertDto } from './dto/create-expert.dto';
import { Expert } from './entities/expert.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExpertService {
  constructor(
    @InjectRepository(Expert)
    private expertRepository: Repository<Expert>,
  ) {}

  async create(createExpertDto: CreateExpertDto): Promise<Expert> {
    const newExpert = this.expertRepository.create(createExpertDto);
    return this.expertRepository.save(newExpert);
  }

  async findAll(): Promise<Expert[]> {
    return this.expertRepository.find();
  }

  async findOne(id: Expert['id']): Promise<Expert> {
    const user = await this.expertRepository.findOneBy({
      id,
    });
    if (!user) {
      throw new NotFoundException(`Expert with ID "${id}" not found`);
    }
    return user;
  }

  async delete(id: Expert['id']): Promise<void> {
    await this.expertRepository.softDelete(id);
  }
}
