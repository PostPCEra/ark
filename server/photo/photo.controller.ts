import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post('create')
    async create(@Body() contactData: Photo): Promise<any> {
      return this.photoService.create(contactData);
    }  

  @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.photoService.delete(id);
  }
    
}
