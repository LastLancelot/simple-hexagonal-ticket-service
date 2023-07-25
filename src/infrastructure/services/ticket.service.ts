import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { ITicketService } from 'src/app/ports/service/ticket.port.service';
import { Ticket } from 'src/core/entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService implements ITicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketsRepository: Repository<Ticket>,
    private httpService: HttpService,
  ) {}
  async getAll(): Promise<Ticket[]> {
    return await this.ticketsRepository.find();
  }

  async get(id: number): Promise<Ticket> {
    return await this.ticketsRepository.findOne({ where: { id: id } });
  }

  async create(item: Ticket): Promise<Ticket> {
    return await this.ticketsRepository.save(item);
  }

  async update(id: number, item: Ticket) {
    return await this.ticketsRepository.update(id, item);
  }

  async getTicket(id: number) {
    const url =
      'https://my.laphil.com/en/rest-proxy/TXN/Packages/' +
      `${id}` +
      '/Seats?constituentId=0&modeOfSaleId=26&pack';
    console.log(url);
    const { data } = await firstValueFrom(this.httpService.get(url));
    return await data;
  }
}
