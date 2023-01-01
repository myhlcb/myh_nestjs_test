import * as path from 'path';

console.log(path.join(__dirname, '../entity', '**.entity.{ts,js}'), 11111);
export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nest',
  entities: [path.join(__dirname, '../', '**/**.entity{.ts,.js}')],
  synchronize: true,
};
