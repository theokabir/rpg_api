import { Body, Controller, Post, Headers, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { Param, Put, Res } from '@nestjs/common/decorators';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly us: UserService) {}

  @Get('exists/name/:name')
  async existsName(@Param('name') name: string) {
    return (await this.us.userExistsName(name)) || false;
  }

  @Get('exists/id/:id')
  async existsId(@Param('id') id: string) {
    return (await this.us.userExistsId(id)) || false;
  }

  @Get('full')
  async fullFind(@Headers('player') player: string) {
    return await this.us.fullFind(player);
  }

  @Get('home')
  async homeFind(@Headers('player') player: string) {
    return await this.us.homeFind(player);
  }

  @Post()
  async create(@Body() player: User) {
    return this.us.create(player);
  }

  @Put('status/max/:status/:mod')
  async changeMaxStatus(
    @Headers('player') player: string,
    @Param('status') status: string,
    @Param('mod') mod: number,
  ) {
    return (await this.us.mudarStatusMaximo(player, mod, status)).status;
  }

  @Put('status/atual/:status/:mod')
  async changeAtualStatus(
    @Headers('player') player: string,
    @Param('status') status: string,
    @Param('mod') mod: string,
    @Res() response: Response,
  ) {
    if (!/^[+|-]?[\d]+$/.test(mod)) {
      return response.status(400).json({ msg: 'valor não é válido' });
    }
    const newPlayer = await this.us.mudarStatusAtual(player, mod, status);
    return response.status(201).json(newPlayer.status);
  }

  @Put('attribute/:field/add/:value')
  async addRitual(
    @Param('field') field: string,
    @Headers('player') id: string,
    @Param('value') value: string,
  ): Promise<any> {
    return await this.us.addRitual(field, id, value);
  }

  @Put('attribute/:field/remove/:value')
  async removeRitual(
    @Param('field') field: string,
    @Headers('player') id: string,
    @Param('value') value: string,
  ): Promise<any> {
    return await this.us.removeRitual(field, id, value);
  }
}
