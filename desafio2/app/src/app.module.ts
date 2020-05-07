import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaModule } from './maratona/maratona.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from './maratona/maratona.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Maratona],
      synchronize: true,
    }),
    MaratonaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
