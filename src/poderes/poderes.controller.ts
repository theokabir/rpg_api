import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Poderes } from './poderes';
import { PoderesService } from './poderes.service';

@Controller('poderes')
export class PoderesController {
  constructor(private readonly ps: PoderesService) {}

  @Get()
  async getAll(): Promise<Poderes[]> {
    return await this.ps.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Poderes> {
    return await this.ps.getById(id);
  }

  @Post()
  async create(@Body() pod: Poderes): Promise<Poderes> {
    return await this.ps.create(pod);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() pod: Poderes,
  ): Promise<Poderes> {
    return await this.ps.update(id, pod);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.ps.delete(id);
  }
}
