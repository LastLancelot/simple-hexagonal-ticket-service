import { IGenericService } from 'src/core/abstracts/generic-repository.abstract';
import { Ticket } from 'src/core/entities/ticket.entity';

export abstract class ITicketService extends IGenericService<Ticket> {}
