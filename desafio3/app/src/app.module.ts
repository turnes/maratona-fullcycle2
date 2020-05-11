import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceiverController } from './receiver/receiver.controller';
import { SenderController } from './send/sender.controller';

@Module({
  imports: [],
  controllers: [AppController, ReceiverController, SenderController],
  providers: [AppService],
})
export class AppModule {}
