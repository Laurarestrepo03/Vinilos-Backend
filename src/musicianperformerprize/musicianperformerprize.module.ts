import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musician } from '../musician/musician.entity';
import { PerformerPrize } from '../performerprize/performerprize.entity';
import { MusicianPerformerPrizeService } from './musicianperformerprize.service';
import { MusicianPerfomerPrizeController } from './musicianperformerprize.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Musician, PerformerPrize])],
  controllers: [MusicianPerfomerPrizeController],
  providers: [MusicianPerformerPrizeService]
})
export class MusicianPerformerPrizeModule { }
