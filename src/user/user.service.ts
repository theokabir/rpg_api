import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUserStatus(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  async userExistsName(name: string) {
    return await this.userModel.findOne({ name: name }).select('_id');
  }

  async userExistsId(id: string) {
    return await this.userModel.findOne({ _id: id }).select('_id');
  }

  async create(user: User) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async fullFind(id: string): Promise<any> {
    return await this.userModel
      .findOne({ _id: id })
      .populate({ path: 'rituais' })
      .populate({ path: 'habilidades' })
      .populate({ path: 'poderes' })
      .exec();
  }

  async homeFind(id: string): Promise<any> {
    return await this.userModel
      .findOne({ _id: id })
      .populate({
        path: 'rituais',
        select: '_id nome descricao status.elemento status.circulo',
      })
      .populate({ path: 'habilidades', select: '_id nome descricao' })
      .populate({ path: 'poderes', select: '_id nome elemento descricao' });
  }

  async mudarStatusAtual(id: string, mod: string, statusname: string) {
    const player = await this.getUserStatus(id);

    const atualValue = player.status[statusname].atual;
    const maxValue = player.status[statusname].max;
    const limitValue = statusname == 'pv' ? -Math.floor(maxValue / 2) : 0;
    const newValue =
      atualValue +
      (/^[\d]*$/.test(mod)
        ? parseInt(mod) - atualValue
        : /^[+]/.test(mod)
        ? parseInt(mod.slice(1))
        : -parseInt(mod.slice(1)));

    player.status[statusname].atual =
      newValue > maxValue
        ? maxValue
        : newValue < limitValue
        ? limitValue
        : newValue;

    return await this.userModel.findByIdAndUpdate(player, player, {
      new: true,
    });
  }

  async mudarStatusMaximo(id: string, mod: number, statusname: string) {
    const player = await this.getUserStatus(id);
    player.status[statusname].max = mod;

    return await this.userModel.findByIdAndUpdate(id, player, { new: true });
  }

  async addRitual(field: string, id: string, value: string) {
    const player: User = await this.getUserStatus(id);
    if (player[field].indexOf(value) == -1) {
      player[field].push(value);
      await this.userModel.updateOne({ _id: id }, player);
    }

    return await this.getUserStatus(id);
  }

  async removeRitual(field: string, id: string, value: string) {
    const player: User = await this.getUserStatus(id);
    const ritualIndex = player[field].indexOf(value);
    if (ritualIndex != -1) {
      player[field].splice(ritualIndex, 1);
      await this.userModel.updateOne({ _id: id }, player);
    }

    return await this.getUserStatus(id);
  }
}
