import { inject, injectable } from 'tsyringe';

import { ICarImagesRepository } from '@modules/cars/repositories/ICarImagesRepository';
import { AppError } from '@shared/errors/AppError';
import { deleteFile } from '@utils/file';

@injectable()
export class DeleteCarImageUseCase {
  constructor(
    @inject('CarImagesRepository')
    private carImagesRepository: ICarImagesRepository,
  ) {}

  async execute(image_id: string) {
    const image = await this.carImagesRepository.findById(image_id);

    if (!image) {
      throw new AppError('Image does not exists!');
    }

    await deleteFile(`./tmp/cars/${image.image_name}`);

    await this.carImagesRepository.delete(image_id);
  }
}
