import { Controller, Get, Post, Param, Request } from '@nestjs/common';
import { Maratona } from "./maratona.entity"
import { Repository } from "typeorm"
import { InjectRepository } from '@nestjs/typeorm';


@Controller('maratona')
export class MaratonaController {

    constructor(
        @InjectRepository(Maratona)
        private readonly maratonaRepo: Repository<Maratona>
    ) {}

    @Get()
    async index(@Request() req) {

        if(req.body){
            const aula = await this.maratonaRepo.find(req.body);
            return aula
        }

        const listAulas = await this.maratonaRepo.find();
        return listAulas;
    }

    @Get(':name')
    async getByNameParam(@Param() params){
        const aula = await this.maratonaRepo.findOne({aula: params.name});
        if (aula) {
            return aula;
        }            
        return 'Aula não encontrada!'
    }
    

    @Post()
    async createBody(@Request() req) {
        const aula = await this.maratonaRepo.save(req.body);
        return aula;
    }

    @Post(':aulaName')
    async createParam(@Param() params) {
        const aula = await this.maratonaRepo.save({ aula: params.aulaName })
        return aula;
    }
}
