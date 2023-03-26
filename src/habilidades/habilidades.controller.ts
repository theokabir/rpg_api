import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Habilidades } from './habilidades';
import { HabilidadesService } from './habilidades.service';

@Controller('habilidades')
export class HabilidadesController {
  constructor(private readonly hs: HabilidadesService) {}

  @Get()
  async getAll(): Promise<Habilidades[]> {
    return this.hs.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Habilidades> {
    return await this.hs.getById(id);
  }

  @Post()
  async create(@Body() hab: Habilidades): Promise<Habilidades> {
    return await this.hs.create(hab);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() habilidade: Habilidades,
  ): Promise<Habilidades> {
    return await this.hs.update(id, habilidade);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.hs.delete(id);
  }
}
