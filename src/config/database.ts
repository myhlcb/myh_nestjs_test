import * as path from 'path';

console.log(path.join(__dirname, '../', 'entity/**.entity{.ts,.js}'), 1111221);
export default {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'nest',
  password: '123456',
  database: 'typeorm',
  entities: [path.join(__dirname, '../', '**/**.entity{.ts,.js}')],
  synchronize: true,
};
