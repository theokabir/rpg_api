import { Module } from '@nestjs/common';
import { HabilidadesController } from './habilidades.controller';
import { HabilidadesService } from './habilidades.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HabilidadesSchema } from './habilidades.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Habilidades', schema: HabilidadesSchema },
    ]),
  ],
  controllers: [HabilidadesController],
  providers: [HabilidadesService],
})
export class HabilidadesModule {}
