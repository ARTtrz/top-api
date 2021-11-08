import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {


    

    @Get('get/:alias')
    async getbyroduct(@Param('alias') alias: string) {

    }


    @Post('find')
    async find(@Body() dto: FindTopPageDto) {

    }
    @Post('save')
    async save(@Body() dto: TopPageModel) {

    }



    @Delete(':id')
    async delete(@Param('id') id: string) {

    }




}
