import { Module } from "@nestjs/common";
import { TicketModule } from "./modules/ticket.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ticket } from "./core/entities/ticket.entity";
import "dotenv/config";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: `${process.env.DATABASE_HOST}`,
      port: Number(`${process.env.DATABASE_PORT}`),
      username: `${process.env.DATABASE_USER}`,
      password: `${process.env.DATABASE_PASSWORD}`,
      database: `${process.env.DATABASE_NAME}`,
      entities: [Ticket],
      synchronize: true,
    }),
    TicketModule,
    HttpModule,
  ],
})
export class AppModule {}
