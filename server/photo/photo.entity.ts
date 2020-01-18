
import {
  Entity,
  Column,
  ObjectID,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Photo {

  /*
  @ObjectIdColumn()
  id: ObjectID;
  */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  filename: string;

  /*
  @Column()
  isPublished: boolean;
  */
}
