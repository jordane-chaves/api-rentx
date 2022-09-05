import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { AppError } from '@shared/errors/AppError';

import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let dayJsDateProvider: DayjsDateProvider;

describe('Create Rental', () => {
  const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000; // 24 horas

  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayJsDateProvider = new DayjsDateProvider();
    carsRepositoryInMemory = new CarsRepositoryInMemory();

    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayJsDateProvider,
      carsRepositoryInMemory,
    );
  });

  it('should be able to create a new rental', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'car_test_rental',
      description: 'Create a New Rental Test',
      daily_rate: 50,
      license_plate: 'TST-TEST',
      fine_amount: 20,
      brand: 'Test',
      category_id: 'any_category_id',
    });

    const rental = await createRentalUseCase.execute({
      user_id: 'any_user_id',
      car_id: car.id,
      expected_return_date: new Date(
        new Date().getTime() + 1 + twentyFourHoursInMilliseconds,
      ),
    });

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
    expect(car.available).toBe(false);
  });

  it('should not be able to create a new rental if there is another one open for the same user', async () => {
    const user_id = 'same_user';

    await rentalsRepositoryInMemory.create({
      car_id: 'any_car_id_test_same_user',
      expected_return_date: new Date(
        new Date().getTime() + 1 + twentyFourHoursInMilliseconds,
      ),
      user_id,
    });

    await expect(
      createRentalUseCase.execute({
        user_id,
        car_id: 'test_another_car_id',
        expected_return_date: new Date(
          new Date().getTime() + 1 + twentyFourHoursInMilliseconds,
        ),
      }),
    ).rejects.toEqual(new AppError("There's a rental in progress for user!"));
  });

  it('should not be able to create a new rental if there is another one open for the same car', async () => {
    const car_id = 'same_car';

    await rentalsRepositoryInMemory.create({
      car_id,
      expected_return_date: new Date(
        new Date().getTime() + 1 + twentyFourHoursInMilliseconds,
      ),
      user_id: 'any_user_id_test_same_car',
    });

    await expect(
      createRentalUseCase.execute({
        user_id: 'test_another_user_id',
        car_id,
        expected_return_date: new Date(
          new Date().getTime() + 1 + twentyFourHoursInMilliseconds,
        ),
      }),
    ).rejects.toEqual(new AppError('Car is unavailable!'));
  });

  it('should not be able to create a new rental with invalid return time', async () => {
    const invalidReturnTimeInMilliseconds = 23 * 60 * 60 * 1000; // 23 horas

    const expected_return_date = new Date(
      new Date().getTime() + invalidReturnTimeInMilliseconds,
    );

    await expect(
      createRentalUseCase.execute({
        user_id: 'user_id_test_return_date',
        car_id: 'car_id_test_return_date',
        expected_return_date,
      }),
    ).rejects.toEqual(new AppError('Invalid return time!'));
  });
});
