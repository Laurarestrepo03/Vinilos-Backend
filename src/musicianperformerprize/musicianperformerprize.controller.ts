import { Controller, UseInterceptors, Post, HttpCode, Param, Get, Put, Body, Delete } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { MusicianPerformerPrizeService } from './musicianperformerprize.service';

@Controller('musicians')
@UseInterceptors(BusinessErrorsInterceptor)
export class MusicianPerfomerPrizeController {

    constructor(private readonly musicianPerformerPrizeService: MusicianPerformerPrizeService) { }

    @Get(':musicianId/performerPrizes/')
    async findPerformerPrizesByMusicianId(@Param('musicianId') musicianId: number) {
        return await this.musicianPerformerPrizeService.findPerformerPrizesByMusicianId(musicianId);
    }

}
