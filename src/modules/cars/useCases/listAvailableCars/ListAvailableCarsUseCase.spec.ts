import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: ICarsRepository;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    await carsRepositoryInMemory.create({
      name: 'Car Available',
      description: 'Test the new available car',
      daily_rate: 100,
      license_plate: 'ABC-test',
      fine_amount: 50,
      brand: 'car_brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({});
    const hasOnlyCarsAvailable = cars.some(car => car.available !== false);

    expect(hasOnlyCarsAvailable).toBe(true);
  });

  it('should be able to list all available cars by category id', async () => {
    const category_id = 'category_id';

    await carsRepositoryInMemory.create({
      name: 'Correct Car',
      description: 'Car with the exact category id',
      daily_rate: 100,
      license_plate: 'DEF-license',
      fine_amount: 50,
      brand: 'car_brand',
      category_id,
    });

    await carsRepositoryInMemory.create({
      name: 'Another Car',
      description: 'Car with incorrect category id',
      daily_rate: 100,
      license_plate: 'ABC-test-license',
      fine_amount: 50,
      brand: 'car_brand',
      category_id: 'another_category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id,
    });

    const hasIncorrectCategoryId = cars.some(
      car => car.category_id !== category_id,
    );

    expect(hasIncorrectCategoryId).toBe(false);
  });

  it('should be able to list all available cars by brand name', async () => {
    const brand = 'car_brand';

    await carsRepositoryInMemory.create({
      name: 'Car',
      description: 'Car with the exact brand name',
      daily_rate: 100,
      license_plate: 'DEF-license',
      fine_amount: 50,
      brand,
      category_id: 'category_id',
    });

    await carsRepositoryInMemory.create({
      name: 'Another Car',
      description: 'Car with incorrect brand name',
      daily_rate: 100,
      license_plate: 'ABC-test-license',
      fine_amount: 50,
      brand: 'another_car_brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand,
    });

    const hasIncorrectCategoryId = cars.some(car => car.brand !== brand);

    expect(hasIncorrectCategoryId).toBe(false);
  });

  it('should be able to list all available cars by name', async () => {
    const name = 'Car One';

    await carsRepositoryInMemory.create({
      name,
      description: 'Car with the exact name',
      daily_rate: 100,
      license_plate: 'AFD-license',
      fine_amount: 50,
      brand: 'car_brand',
      category_id: 'category_id',
    });

    await carsRepositoryInMemory.create({
      name: 'Another Car',
      description: "Car with another name, don't return this",
      daily_rate: 100,
      license_plate: 'FDS-test-license',
      fine_amount: 50,
      brand: 'car_brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name,
    });

    const hasIncorrectCategoryId = cars.some(car => car.name !== name);

    expect(hasIncorrectCategoryId).toBe(false);
  });
});
