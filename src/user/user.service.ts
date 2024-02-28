import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Family } from 'src/family/entities/family.entity';
import { Expert } from 'src/expert/entities/expert.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Family)
    private familyRepository: Repository<Family>,
    @InjectRepository(Expert)
    private expertRepository: Repository<Expert>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.email) {
      const userObject = await this.userRepository.findOneBy({
        email: createUserDto.email,
      });
      if (userObject) {
        throw new HttpException(
          {
            status: HttpStatus.UNPROCESSABLE_ENTITY,
            errors: {
              email: 'emailAlreadyExists',
            },
          },
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
    }

    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: User['id']): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['sensors', 'family', 'experts'],
    });
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }

  async update(
    id: User['id'],
    updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    const entity = await this.userRepository.findOneBy({
      id,
    });

    if (!entity) {
      throw new Error('User not found');
    }

    const updatedEntity = await this.userRepository.save(
      this.userRepository.create(Object.assign(entity, updateUserDto)),
    );

    return updatedEntity;
  }

  async addFamily(
    id: User['id'],
    familyId: Family['id'],
  ): Promise<User | null> {
    const family = await this.familyRepository.findOneBy({
      id: familyId,
    });
    if (!family) {
      throw new NotFoundException(`Family with ID "${familyId}" not found`);
    }

    const entity = await this.userRepository.findOneBy({
      id,
    });

    if (!entity) {
      throw new Error('User not found');
    }

    const newEntity = entity;
    newEntity.family = family;

    const updatedEntity = await this.userRepository.save(
      this.userRepository.create(Object.assign(entity, newEntity)),
    );

    return updatedEntity;
  }

  async addExpert(
    id: User['id'],
    expertId: Expert['id'],
  ): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['experts'], // Load current experts to avoid overriding them
    });
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }

    const expert = await this.expertRepository.findOneBy({ id: expertId });
    if (!expert) {
      throw new NotFoundException(`Expert with ID "${expertId}" not found`);
    }

    // Check if the user already has this expert to avoid duplicates
    const alreadyHasExpert = user.experts.some((exp) => exp.id === expert.id);
    if (!alreadyHasExpert) {
      user.experts.push(expert);
      await this.userRepository.save(user);
    }

    return user;
  }

  async delete(id: User['id']): Promise<void> {
    await this.userRepository.softDelete(id);
  }
}
