import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CoreEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @CreateDateColumn({ type: 'date', name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ type: 'date', name: 'updated_at' })
  updatedAt: string;
}
