import { Module } from '@nestjs/common';
import { VerifyService } from './shared/verify.service';
import { VerifyController } from './verify.controller';

@Module({
  imports: [],
  controllers: [VerifyController],
  providers: [VerifyService],
})
export class VerifyModule {}
