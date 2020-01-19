import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async  create(photo: Photo): Promise<Photo> {
    return await this.photoRepository.save(photo);
  }

async delete(id): Promise<DeleteResult> {
  return await this.photoRepository.delete(id);
  }
  
}