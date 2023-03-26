import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RituaisService } from './rituais.service';
import { Ritual } from './ritual';

@Controller('rituais')
export class RituaisController {
  constructor(private readonly rs: RituaisService) {}

  @Get()
  async getAll(): Promise<Ritual[]> {
    return await this.rs.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.rs.getById(id);
  }

  @Post()
  async create(@Body() ritual: Ritual): Promise<Ritual> {
    return await this.rs.create(ritual);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() ritual: Ritual) {
    return await this.rs.update(id, ritual);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.rs.delete(id);
  }
}
