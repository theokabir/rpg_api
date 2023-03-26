import { Module } from '@nestjs/common';
import { RituaisController } from './rituais.controller';
import { RituaisService } from './rituais.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RituaisSchema } from './rituais.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Rituais', schema: RituaisSchema }]),
  ],
  controllers: [RituaisController],
  providers: [RituaisService],
})
export class RituaisModule {}
