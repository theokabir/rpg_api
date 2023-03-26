import { Module } from '@nestjs/common';
import { PoderesController } from './poderes.controller';
import { PoderesService } from './poderes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PoderesSchema } from './poderes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Poderes', schema: PoderesSchema }]),
  ],
  controllers: [PoderesController],
  providers: [PoderesService],
})
export class PoderesModule {}
