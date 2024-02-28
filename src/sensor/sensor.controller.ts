import {
  Controller,
  Get,
  Param,
  HttpCode,
  HttpStatus,
  Body,
  Post,
} from '@nestjs/common';
import { SensorService } from './sensor.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { Sensor } from './entities/sensor.entity';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { User } from 'src/user/entities/user.entity';

@ApiTags('Sensors')
@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post(':userId')
  @HttpCode(HttpStatus.CREATED)
  @ApiParam({
    name: 'userId',
    type: String,
    required: true,
  })
  create(
    @Param('userId') id: User['id'],
    @Body() createSensorDto: CreateSensorDto,
  ): Promise<Sensor> {
    return this.sensorService.create(id, createSensorDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.sensorService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  findOne(@Param('id') id: Sensor['phoneNumber']) {
    return this.sensorService.findOne(id);
  }

  @Get(':id/info')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  findOneInfo(@Param('id') id: Sensor['phoneNumber']) {
    return this.sensorService.findOneInfo(id);
  }

  @Get(':id/data')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  findOneData(@Param('id') id: Sensor['phoneNumber']) {
    return this.sensorService.findOneData(id);
  }
}
