import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class UserAttributeEditMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (['rituais', 'habilidades', 'poderes'].includes(req.params.field))
      next();
    else
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ msg: 'field invalido' });
  }
}
