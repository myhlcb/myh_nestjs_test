import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  get(id): string {
    return `get:${id}`;
  }
  save(message): string {
    console.log(message);
    return `post:${message}`;
  }
  update(id, message): string {
    return `patch:${id} and message:${message}`;
  }
  remove(id): string {
    return `delete:${id}`;
  }
}
