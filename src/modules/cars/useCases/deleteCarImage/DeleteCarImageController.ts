import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCarImageUseCase } from './DeleteCarImageUseCase';

export class DeleteCarImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: image_id } = request.params;

    const deleteCarImageUseCase = container.resolve(DeleteCarImageUseCase);

    await deleteCarImageUseCase.execute(image_id);

    return response.status(200).send();
  }
}
