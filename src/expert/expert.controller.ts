import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ExpertService } from './expert.service';
import { CreateExpertDto } from './dto/create-expert.dto';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { Expert } from './entities/expert.entity';

@ApiTags('Experts')
@Controller('expert')
export class ExpertController {
  constructor(private readonly expertService: ExpertService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createExpertDto: CreateExpertDto): Promise<Expert> {
    return this.expertService.create(createExpertDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.expertService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  findOne(@Param('id') id: Expert['id']): Promise<Expert> {
    return this.expertService.findOne(id);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: Expert['id']): Promise<void> {
    return this.expertService.delete(id);
  }
}
