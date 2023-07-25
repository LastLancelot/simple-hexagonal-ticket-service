import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from 'src/controllers/ticket/ticket.controller';
import { Ticket } from 'src/core/entities/ticket.entity';
import { TicketService } from 'src/infrastructure/services/ticket.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Ticket])],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
