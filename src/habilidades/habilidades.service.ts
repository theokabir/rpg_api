import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Habilidades } from './habilidades';

@Injectable()
export class HabilidadesService {
  constructor(
    @InjectModel('Habilidades') private readonly hm: Model<Habilidades>,
  ) {}

  async getAll(): Promise<Habilidades[]> {
    return await this.hm.find();
  }

  async getById(id: string): Promise<Habilidades> {
    return await this.hm.findById(id);
  }

  async create(habilidade: Habilidades): Promise<Habilidades> {
    const newHab = new this.hm(habilidade);
    return await newHab.save();
  }

  async update(id: string, hab: Habilidades): Promise<Habilidades> {
    await this.hm.updateOne({ _id: id }, hab);
    return this.getById(id);
  }

  async delete(id: string): Promise<any> {
    return await this.hm.deleteOne({ _id: id });
  }
}
