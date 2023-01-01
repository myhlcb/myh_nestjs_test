import { join } from 'path';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

export default {
  transport: '',
  defaults: {
    from: '"nest-modules" <modules@nestjs.com>',
  },
  template: {
    dir: join(__dirname, ''),
    adapter: new PugAdapter(),
    options: {
      strict: true,
    },
  },
};
