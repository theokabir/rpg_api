import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class TokenCheckMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: () => void) {
    if (!(req.headers.token == process.env.TOKEN) || !req.headers.player) {
      res.status(HttpStatus.UNAUTHORIZED).json({ msg: 'não verificado' });
      return;
    }
    next();
  }
}
