import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @Column('varchar')
  password: string;

  @Column()
  status: boolean;
}
