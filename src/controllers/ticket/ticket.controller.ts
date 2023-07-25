import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { TicketService } from 'src/infrastructure/services/ticket.service';

@ApiTags('Ticket Controller')
@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @ApiOperation({ summary: 'Get all ticket' })
  @ApiCreatedResponse({ description: 'All ticket successfully getted' })
  @ApiParam({ name: 'id', type: Number })
  @Get('ticket/:id')
  getTicket(@Param('id') id: number) {
    return this.ticketService.getTicket(id);
  }
}
