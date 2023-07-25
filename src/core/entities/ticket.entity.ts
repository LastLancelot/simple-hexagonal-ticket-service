import { Column, Entity } from 'typeorm';
import { CoreEntity } from './core.entity';

Entity('tickets');
export class Ticket extends CoreEntity {
  @Column({ nullable: false })
  section: string;

  @Column({ nullable: false })
  row: number;

  @Column({ nullable: false, name: 'seat_number' })
  seatNumber: number;

  @Column({ nullable: false })
  price: number;
}
