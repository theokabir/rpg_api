import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Poderes } from './poderes';

@Injectable()
export class PoderesService {
  constructor(@InjectModel('Poderes') private readonly pm: Model<Poderes>) {}

  async getAll(): Promise<Poderes[]> {
    return await this.pm.find();
  }

  async getById(id: string): Promise<Poderes> {
    return await this.pm.findById(id);
  }

  async create(pod: Poderes): Promise<Poderes> {
    const newPod = new this.pm(pod);
    return await newPod.save();
  }

  async update(id: string, pod: Poderes): Promise<Poderes> {
    await this.pm.updateOne({ _id: id }, pod);
    return this.getById(id);
  }

  async delete(id: string): Promise<any> {
    return this.pm.deleteOne({ _id: id });
  }
}
