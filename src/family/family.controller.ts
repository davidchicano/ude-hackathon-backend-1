import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Family } from './entities/family.entity';
import { CreateFamilyDto } from './dto/create-family.dto';
import { FamilyService } from './family.service';

@ApiTags('Families')
@Controller('family')
export class FamilyController {
  constructor(private readonly familyService: FamilyService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createFamily(@Body() createFamilyDto: CreateFamilyDto): Promise<Family> {
    return this.familyService.create(createFamilyDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.familyService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  findOne(@Param('id') id: Family['id']): Promise<Family> {
    return this.familyService.findOne(id);
  }
}
