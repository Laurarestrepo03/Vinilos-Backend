import { Controller, Get, Post, HttpCode, Body, Param, Put, Delete, UseInterceptors } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumDTO } from './album.dto';

import { BusinessErrorsInterceptor } from "../interceptors/interceptor";
import { GENRE } from '../genre/genre.enum';
import { RECORD_LABEL } from '../recordlabel/recordlabel.enum';

@Controller('albums')
@UseInterceptors(BusinessErrorsInterceptor)
export class AlbumController {
    constructor(private readonly albumService: AlbumService) { }

    @Get()
    async findAll() {
        return await this.albumService.findAll();
    }

    @Get('genres')
    getGenres() {
        return Object.values(GENRE)
    }

    @Get('recordLabels')
    getRecordLabels() {
        return Object.values(RECORD_LABEL)
    }

    @Get(':albumId')
    async findOne(@Param('albumId') albumId: number) {
        return await this.albumService.findOne(albumId);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() albumDTO: AlbumDTO) {
        return await this.albumService.create(albumDTO);
    }

    @Put(':albumId')
    async update(@Param('albumId') albumId: number, @Body() albumDTO: AlbumDTO) {
        return await this.albumService.update(albumId, albumDTO);
    }

    @Delete(':albumId')
    @HttpCode(204)
    async delete(@Param('albumId') albumId: number) {
        return await this.albumService.delete(albumId)
    }

}
