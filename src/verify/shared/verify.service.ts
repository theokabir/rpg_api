import { Injectable } from '@nestjs/common';

@Injectable()
export class VerifyService {
  validarToken(token: string): boolean {
    return token == process.env.TOKEN;
  }
}
