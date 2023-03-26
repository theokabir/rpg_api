import { Controller, Headers, Get } from '@nestjs/common';

@Controller('verify')
export class VerifyController {
  @Get()
  hello(@Headers('token') token) {
    return { isValid: token == process.env.TOKEN };
  }
}
