import { Controller, Get, Render } from '@nestjs/common';

@Controller('sender')
export class SenderController {

    @Get()
    @Render('sender.hbs')
    index(){
        return {}
    }
}
