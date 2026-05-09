import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessLogicException, BusinessError } from "../shared/errors/business-errors";
import { Repository } from 'typeorm';
import { Musician } from '../musician/musician.entity';
import { PerformerPrize } from '../performerprize/performerprize.entity';
import { PerformerPrizeDTO } from '../performerprize/performerprize.dto';

@Injectable()
export class MusicianPerformerPrizeService {

constructor(
    @InjectRepository(Musician)
    private readonly musicianRepository: Repository<Musician>,

    @InjectRepository(PerformerPrize)
    private readonly performerPrizeRepository: Repository<PerformerPrize>) { }

    async findPerformerPrizesByMusicianId(musicianId: number): Promise<PerformerPrizeDTO[]> {
        const musician = await this.musicianRepository.findOne(musicianId, { relations: ["performerPrizes", "performerPrizes.prize"] });
        if (!musician)
            throw new BusinessLogicException("The musician with the given id was not found", BusinessError.NOT_FOUND)
        return musician.performerPrizes
    }

}
