import { Controller, Get, Render } from '@nestjs/common';

@Controller('receiver')
export class ReceiverController {

    @Get()
    @Render('receiver.hbs')
    index(){
        return { };
    }
}
