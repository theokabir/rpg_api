import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ritual } from './ritual';

@Injectable()
export class RituaisService {
  constructor(
    @InjectModel('Rituais') private readonly rituaisModel: Model<Ritual>,
  ) {}

  async getAll(): Promise<Ritual[]> {
    return await this.rituaisModel.find().exec();
  }

  async getById(id: string): Promise<Ritual> {
    return await this.rituaisModel.findById(id);
  }

  async create(ritual: Ritual): Promise<Ritual> {
    const newRitual = new this.rituaisModel(ritual);
    return await newRitual.save();
  }

  async update(id: string, ritual: Ritual): Promise<Ritual> {
    await this.rituaisModel.updateOne({ _id: id }, ritual).exec();
    return await this.getById(id);
  }

  async delete(id: string) {
    return await this.rituaisModel.deleteOne({ _id: id }).exec();
  }
}
