import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    const { method, path } = req;
    console.log(`method is:${method} and path:${path}`);
    next();
  }
}
